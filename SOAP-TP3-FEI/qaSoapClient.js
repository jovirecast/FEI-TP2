import soap from "soap";
import { parseStringPromise } from "xml2js";

const WSDL_URL = "http://localhost:3000/qaService?wsdl";

class QASoapClient {
  constructor() {
    this.client = null;
  }

  // Inicializar el cliente SOAP
  async init() {
    if (!this.client) {
      this.client = await soap.createClientAsync(WSDL_URL);
    }
  }

  async parseXml(xml) {
    const result = await parseStringPromise(xml, {
      explicitArray: false,
      mergeAttrs: true,
      trim: true
    });

    // Normalizar estructura para que Preguntas siempre sea un array
    let preguntas = result?.Preguntas?.Pregunta || [];
    if (!Array.isArray(preguntas)) preguntas = [preguntas];

    return preguntas.map(p => ({
      id: p.id,
      texto: p.Texto,
      respuestas: (p.Respuestas?.Respuesta || []).map(r => ({
        id: r.id,
        texto: r._ || r, // dependiendo de xml2js
        es_correcta: r.correcta === "true"
      }))
    }));
  }

  // Llamada a GetAllQuestions
  async getAllQuestions() {
    await this.init();
    const [res] = await this.client.GetAllQuestionsAsync({});
    // result.result contiene el XML
    return this.parseXml(res.result);
  }

  // Llamada a GetQuestionById
  async getQuestionById(id) {
    await this.init();
    const [res] = await this.client.GetQuestionByIdAsync({id});
    return this.parseXml(res.result);
  }

  // Llamada a GetRandomQuestion
  async getRandomQuestion() {
    await this.init();
    const [res] = await this.client.GetRandomQuestionAsync({});
    return this.parseXml(res.result);
  }
}

export default new QASoapClient();