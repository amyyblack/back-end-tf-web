# back-end-tf-web
Back-End do trabalho final da disciplina de WEB
---

# 🎥 Catálogo de Filmes Brasileiros — Backend

API desenvolvida em **Node.js + Express + PostgreSQL (Neon.tech)** para gerenciar um catálogo de filmes brasileiros.
O projeto foi estruturado para permitir o consumo por um frontend separado, hospedado em outro repositório.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **PostgreSQL (Neon.tech)**
* **Dotenv** (variáveis de ambiente)
* **Nodemon** (ambiente de desenvolvimento)

---

## 📂 Estrutura do Projeto

```
back-end-tf-web/
│
├── src/
│   ├── db/
│   │   └── connection.js
│   ├── routes/
│   │   └── filmes.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Crie o arquivo `.env`** na raiz do projeto e adicione a URL do seu banco Neon:

   ```env
   DATABASE_URL=postgresql://usuario:senha@host/neondb?sslmode=require
   ```

3. **Inicie o servidor em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

   O servidor será iniciado em **[http://localhost:5000](http://localhost:5000)**

---

## 🎯 Rotas da API

### 🎬 `GET /filmes`

Retorna todos os filmes cadastrados.

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Cidade de Deus",
    "diretor": "Fernando Meirelles",
    "ano": 2002,
    "genero": "Drama",
    "sinopse": "A história de jovens crescendo em uma favela violenta do Rio de Janeiro.",
    "avaliacao": "9.0",
    "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeusPoster.jpg"
  }
]
```

---

### 🎞️ `GET /filmes/:id`

Busca um filme específico pelo seu ID.

**Exemplo:**

```
GET /filmes/1
```

**Resposta:**

```json
{
  "id": 1,
  "titulo": "Cidade de Deus",
  "diretor": "Fernando Meirelles",
  "ano": 2002,
  "genero": "Drama",
  "sinopse": "A história de jovens crescendo em uma favela violenta do Rio de Janeiro.",
  "avaliacao": "9.0",
  "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeusPoster.jpg"
}
```

---

### ➕ `POST /filmes`

Adiciona um novo filme ao catálogo.

**Corpo (JSON):**

```json
{
  "titulo": "Carandiru",
  "diretor": "Hector Babenco",
  "ano": 2003,
  "genero": "Drama",
  "sinopse": "Baseado nas memórias de um médico no presídio de Carandiru.",
  "avaliacao": 8.0,
  "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/7/70/Carandiru_poster.jpg"
}
```

**Resposta:**

```json
{
  "id": 6,
  "titulo": "Carandiru",
  "diretor": "Hector Babenco",
  "ano": 2003,
  "genero": "Drama",
  "sinopse": "Baseado nas memórias de um médico no presídio de Carandiru.",
  "avaliacao": "8.0",
  "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/7/70/Carandiru_poster.jpg"
}
```

---

### ✏️ `PUT /filmes/:id`

Atualiza as informações de um filme existente.

**Exemplo:**

```
PUT /filmes/2
```

**Corpo (JSON):**

```json
{
  "titulo": "Central do Brasil (Remasterizado)",
  "diretor": "Walter Salles",
  "ano": 1998,
  "genero": "Drama",
  "sinopse": "Uma ex-professora ajuda um garoto a encontrar seu pai no Nordeste.",
  "avaliacao": 8.6,
  "imagem_url": "https://upload.wikimedia.org/wikipedia/pt/4/4c/Central_do_Brasil_%28poster%29.jpg"
}
```

**Resposta:**

```json
{
  "mensagem": "Filme atualizado com sucesso!"
}
```

---

### 🗑️ `DELETE /filmes/:id`

Exclui um filme do catálogo pelo ID.

**Exemplo:**

```
DELETE /filmes/5
```

**Resposta:**

```json
{
  "mensagem": "Filme removido com sucesso"
}
```

---

## 💾 Estrutura do Banco de Dados

Tabela: **filmes**

| Campo      | Tipo         | Descrição                    |
| ---------- | ------------ | ---------------------------- |
| id         | SERIAL (PK)  | Identificador único do filme |
| titulo     | VARCHAR(100) | Nome do filme                |
| diretor    | VARCHAR(100) | Nome do diretor              |
| ano        | INTEGER      | Ano de lançamento            |
| genero     | VARCHAR(50)  | Gênero do filme              |
| sinopse    | TEXT         | Descrição breve              |
| avaliacao  | DECIMAL(2,1) | Nota de avaliação            |
| imagem_url | TEXT         | URL do cartaz do filme       |

---

## 👩‍💻 Desenvolvido por

**Luiza Nere**
💡 Projeto de backend — *Catálogo de Filmes Brasileiros*
Base de dados hospedada em [**Neon.tech**](https://neon.tech/)