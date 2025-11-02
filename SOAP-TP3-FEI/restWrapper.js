// restWrapper.js
import express from "express";
import qaClient from "./qaSoapClient.js";

const app = express();
const PORT = 4000; // Puerto para el servicio REST

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
    res.json(pregunta);
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