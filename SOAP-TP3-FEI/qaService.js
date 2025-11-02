import { db } from "./dbConfig.js";
import xmlbuilder from "xmlbuilder";

export async function getAllQuestions() {
  const [preguntas] = await db.query("SELECT * FROM pregunta");
  const [respuestas] = await db.query("SELECT * FROM respuesta");

  const root = xmlbuilder.create("Preguntas");

  preguntas.forEach(p => {
    const preguntaElem = root.ele("Pregunta", { id: p.id_pregunta });
    preguntaElem.ele("Texto", p.texto || "Sin texto");

    const respuestasElem = preguntaElem.ele("Respuestas");

    respuestas
      .filter(r => r.id_pregunta === p.id_pregunta)
      .forEach(r => {
        respuestasElem.ele("Respuesta", {
          id: r.id_respuesta,
          es_correcta: r.es_correcta === 1 ? "true" : "false"
        }).txt(r.texto);
      });
  });
  return root.end({ pretty: true });
}

export async function getQuestionById(id) {
  const [preguntas] = await db.query("SELECT * FROM pregunta WHERE id_pregunta = ?", [id]);
  const [respuestas] = await db.query("SELECT * FROM respuesta WHERE id_pregunta = ?", [id]);

  if (preguntas.length === 0) return "<Error>Pregunta no encontrada</Error>";

  const root = xmlbuilder.create("Preguntas");
  const p = preguntas[0];
  const preguntaElem = root.ele("Pregunta", { id: p.id_pregunta });
  preguntaElem.ele("Texto", p.texto || "Sin texto");

  const respuestasElem = preguntaElem.ele("Respuestas");

  respuestas.forEach(r => {
    if (r.texto) {
      respuestasElem.ele("Respuesta", {
        id: r.id_respuesta,
        correcta: r.es_correcta === 1 ? "true" : "false"
      }).txt(r.texto);
    }
  });

  return root.end({ pretty: true });
}

export async function getRandomQuestion() {
  // Obtener una pregunta aleatoria
  const [preguntas] = await db.query("SELECT * FROM pregunta ORDER BY RAND() LIMIT 1");

  if (preguntas.length === 0) return "<Error>No hay preguntas en la base</Error>";

  const p = preguntas[0];
  // Obtener las respuestas de esa pregunta
  const [respuestas] = await db.query("SELECT * FROM respuesta WHERE id_pregunta = ?", [p.id_pregunta]);

  const root = xmlbuilder.create("Preguntas");
  const preguntaElem = root.ele("Pregunta", { id: p.id_pregunta });
  preguntaElem.ele("Texto", p.texto || "Sin texto");

  const respuestasElem = preguntaElem.ele("Respuestas");

  respuestas
    .filter(r => r.texto)
    .forEach(r => {
      respuestasElem.ele("Respuesta", {
        id: r.id_respuesta,
        correcta: r.es_correcta === 1 ? "true" : "false"
      }).txt(r.texto);
    });

  return root.end({ pretty: true });
}