import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import filmesRouter from './routes/filmes.js';

dotenv.config();
const app = express();

// CORS principal
app.use(cors({
  origin: '*',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// --- RESOLVE PRE-FLIGHT (PUT/DELETE no Vercel → Render) ---
app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res.sendStatus(200);
});

// Rotas
app.use('/filmes', filmesRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('🎬 API de Filmes Brasileiros está rodando! Acesse /filmes para ver os dados.');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
