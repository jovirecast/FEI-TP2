// restWrapper.js
import express from "express";
import qaClient from "./qaSoapClient.js";
import cors from "cors";

const app = express();
const PORT = 4000; // Puerto para el servicio REST

// Habilita CORS para el frontend
app.use(cors({
  origin: 'http://localhost:5173', // url del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Endpoint REST: todas las preguntas
app.get("/preguntas", async (req, res) => {
  try {
    const preguntas = await qaClient.getAllQuestions({});
    res.json(preguntas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint REST: pregunta aleatoria
app.get("/preguntas/random", async (req, res) => {
  try {
    const pregunta = await qaClient.getRandomQuestion({});
    const random = pregunta[Math.floor(Math.random() * pregunta.length)];
    res.json(random);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint REST: pregunta por ID
app.get("/preguntas/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const pregunta = await qaClient.getQuestionById(id);
    res.json(pregunta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`REST wrapper running at http://localhost:${PORT}`);
});