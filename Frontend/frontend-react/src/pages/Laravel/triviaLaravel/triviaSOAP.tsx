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

/*
 * IMPORTANTE:
 * Este componente funciona correctamente si ya existe una pregunta cargada en la base de datos consultada.
 */

export default function TriviaSOAP() {
  // const laravelUrl = import.meta.env.VITE_API_LARAVEL;
  const wrapperUrl = import.meta.env.VITE_API_WRAPPER; // Usamos el wrapper del SOAP para obtener preguntas

  const [pregunta, setPregunta] = useState<Pregunta | null>(null);
  const [respuestaSeleccionada, setRespuestaSeleccionada] =
    useState<Respuesta | null>(null);
  const [resultado, setResultado] = useState("");

  // Cargar una pregunta al iniciar
  useEffect(() => {
    traerPreguntaAleatoria();
  }, []);

  const traerPreguntaAleatoria = async () => {
    setRespuestaSeleccionada(null);
    setResultado("");

    try {
      const res = await fetch(`${wrapperUrl}/preguntas/random`);
      if (!res.ok) throw new Error("Error al traer pregunta");

      const data: Pregunta = await res.json();
      setPregunta(data);
    } catch (error) {
      console.error("Error al traer pregunta:", error);
    }
  };

  const seleccionarRespuesta = (r: Respuesta) => {
    setRespuestaSeleccionada(r);
    if (r.es_correcta) setResultado("✅ ¡Correcto!");
    else setResultado("❌ Incorrecto.");
  };

  if (!pregunta)
    return (
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="text-center"> Cargando pregunta...</p>
        </div>
      </section>
    );
  return (
    <>
      <section className="contact" id="contact">
        <div className="hero-content contact-container">
          <div className="contact-info glass">
            <div className="text-center">
            </div>
            <h3>Módulo de preguntas y respuestas aleatorias</h3>
            <p>Este módulo hace uso de un servicio SOAP por intermedio de un wrapper RESTful</p>
            <h3>Objetivo buscado</h3>
            <p>Lo que se busca es que el frontend en lugar de buscar una pregunta aleatoria y sus respectivas respuestas por intermedio de una ruta del backend que consulta la base de datos, lo haga solicitando los datos desde un wrapper RESTful de un servicio SOAP, siendo solo evidente el cambio desde el lado del programador y no del usuario.</p>
          </div>
          <div className="hero" id="home">
            <div className="hero-content p-6">
              <div className="flex flex-col glass gap-3 m-0 px-12 pb-2">
                <div className="text-center">
                  <h2>
                    <b>{/*Laravel*/}</b>
                  </h2>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {pregunta.texto}
                </h2>

                <div className="flex flex-col items-center gap-4 w-100 mx-auto">
                  {pregunta.respuestas.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => seleccionarRespuesta(r)}
                      disabled={!!respuestaSeleccionada}
                      className={`w-1/2 p-3 rounded-lg border transition ${
                        respuestaSeleccionada?.texto === r.texto
                          ? r.es_correcta
                            ? "bg-green-100 border-green-500"
                            : "bg-red-100 border-red-500"
                          : "hover:bg-gray-100 border-gray-300"
                      }
                      ${
                        respuestaSeleccionada
                          ? "cursor-not-allowed opacity-70"
                          : ""
                      }
                  `}
                    >
                      {r.texto}
                    </button>
                  ))}
                </div>

                {resultado && (
                  <p className="mt-4 text-center font-medium">{resultado}</p>
                )}

                <div className="text-center mt-6">
                  <button
                    onClick={traerPreguntaAleatoria}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Nueva pregunta aleatoria
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
