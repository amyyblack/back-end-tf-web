import express from "express";
import pool from "../db/connection.js";
import { validarAdmin } from "../middlewares/auth.js";  // << IMPORTANTE

const router = express.Router();

/* 
==========================================
  [GET] /filmes  → lista todos os filmes
==========================================
*/
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM filmes ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ erro: "Erro ao buscar filmes" });
  }
});

/* 
==========================================
  [GET] /filmes/:id  → busca um filme específico
==========================================
*/
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM filmes WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    res.status(500).json({ erro: "Erro ao buscar filme" });
  }
});

/* 
==========================================
  [POST] /filmes  → adiciona um novo filme
  (PROTEGIDA — precisa autenticação)
==========================================
*/
router.post("/", validarAdmin, async (req, res) => {
  const { titulo, diretor, ano, genero, sinopse, avaliacao, imagem_url } = req.body;
  if (!titulo) {
    return res.status(400).json({ erro: "O campo 'titulo' é obrigatório." });
  }

  try {
    const result = await pool.query(
      `INSERT INTO filmes (titulo, diretor, ano, genero, sinopse, avaliacao, imagem_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [titulo, diretor, ano, genero, sinopse, avaliacao, imagem_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao adicionar filme:", error);
    res.status(500).json({ erro: "Erro ao adicionar filme" });
  }
});

/* 
==========================================
  [PUT] /filmes/:id  → atualiza um filme
  (PROTEGIDA)
==========================================
*/
router.put("/:id", validarAdmin, async (req, res) => {
  const { id } = req.params;
  const { titulo, diretor, ano, genero, sinopse, avaliacao, imagem_url } = req.body;

  try {
    const result = await pool.query(
      `UPDATE filmes 
       SET titulo=$1, diretor=$2, ano=$3, genero=$4, sinopse=$5, avaliacao=$6, imagem_url=$7
       WHERE id=$8 RETURNING *`,
      [titulo, diretor, ano, genero, sinopse, avaliacao, imagem_url, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar filme:", error);
    res.status(500).json({ erro: "Erro ao atualizar filme" });
  }
});

/* 
==========================================
  [DELETE] /filmes/:id  → remove um filme
  (PROTEGIDA)
==========================================
*/
router.delete("/:id", validarAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM filmes WHERE id=$1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
    res.json({ mensagem: "Filme removido com sucesso", filme: result.rows[0] });
  } catch (error) {
    console.error("Erro ao deletar filme:", error);
    res.status(500).json({ erro: "Erro ao deletar filme" });
  }
});

export default router;
