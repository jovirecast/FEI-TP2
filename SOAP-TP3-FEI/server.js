import express from "express";
import fs from "fs";
import soap from "soap";
import { getAllQuestions, getQuestionById, getRandomQuestion } from "./qaService.js";

const app = express();
const PORT = 3000;

// Importar definiciones de requests y responses xml
const xml = fs.readFileSync("qaService.wsdl", "utf8"); 

const service = {
  QAService: {
    QAServicePort: { // Definición de servicios del SOAP
      GetAllQuestions: async function (_, callback) {
        try {
          const xmlData = await getAllQuestions();
          callback({ result: xmlData });
        } catch (error) {
          console.error(error);
          callback({ result: `<Error>${error.message}</Error>` });
        }
      },
      GetQuestionById: async function (args, callback) {
        try {
          const xmlData = await getQuestionById(args.id);
          callback({ result: xmlData });
        } catch (error) {
          console.error(error);
          callback({ result: `<Error>${error.message}</Error>` });
        }
      },
      GetRandomQuestion: async function (_, callback) {
        try {
          const xmlData = await getRandomQuestion();
          callback({ result: xmlData });
        } catch (error) {
          console.error(error);
          callback({ result: `<Error>${error.message}</Error>` });
        }
      },
    }
  }
};

app.listen(PORT, function () {
  soap.listen(app, "/qaService", service, xml);
  console.log(`SOAP service running at http://localhost:${PORT}/qaService`);
});