import { useEffect, useState } from "react";

interface Respuesta {
  id: number;
  documentId: string;
  texto: string;
  es_correcta: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

interface Pregunta {
  id: number;
  documentId: string;
  texto: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  respuestas: Respuesta[];
}

export default function Trivia() {
  const API_STRAPI = import.meta.env.VITE_API_STRAPI;

  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<Respuesta | null>(null);
  const [resultado, setResultado] = useState("");

  // Cargar una pregunta al iniciar
  useEffect(() => {
    traerPregunta(4);
  }, []);

  const traerPregunta = async (id: number) => {
    try {
      const res = await fetch(`${API_STRAPI}/preguntas?filters[id][$eq]=${id}&populate=respuestas`);
      if (!res.ok) throw new Error("Error al traer la pregunta");

      const data = await res.json();
      // { data: { id: 1, attributes: { texto: "..." } } }
      const pregunta = data.data[0] || "Pregunta no encontrada";
      setPregunta(pregunta); // tu estado React
    } catch (error) {
      console.error("Error al traer pregunta:", error);
    }
  };

  const seleccionarRespuesta = (r: Respuesta) => {
    setRespuestaSeleccionada(r);
    if (r.es_correcta) setResultado("✅ ¡Correcto!");
    else setResultado("❌ Incorrecto.");
  };

  if (!pregunta) return <section className="hero" id="home"><div className="hero-content"><p className="text-center"> Cargando pregunta...</p></div></section>;
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content p-6">
          <div className="flex flex-col glass gap-3">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {pregunta.texto}
              </h2>

              <div className="flex flex-col items-center gap-4">
                {pregunta.respuestas.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => seleccionarRespuesta(r)}
                    className={`w-1/2 p-3 rounded-lg border transition ${respuestaSeleccionada?.texto === r.texto
                      ? r.es_correcta
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "hover:bg-gray-100 border-gray-300"
                      }`}
                  >
                    {r.texto}
                  </button>
                ))}
              </div>

              {resultado && (
                <p className="mt-4 text-center font-medium">
                  {resultado}
                </p>
              )}

              <div className="text-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Siguiente pregunta
                </button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}