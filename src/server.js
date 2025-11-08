import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import filmesRouter from './routes/filmes.js';

dotenv.config();
const app = express();
app.use(cors({
  origin: '*', // ⚠️ permite acesso de qualquer origem (ótimo para testes)
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

app.use('/filmes', filmesRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('🎬 API de Filmes Brasileiros está rodando! Acesse /filmes para ver os dados.');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
