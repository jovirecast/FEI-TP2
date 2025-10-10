import { useState } from "react";

export default function ContactLaravel() {
  const laravelUrl = import.meta.env.VITE_API_LARAVEL;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    texto: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(laravelUrl + "/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      const data = await res.json();
      console.log("Guardado en laravel:", data);

      alert("Consulta enviada con éxito ✅");
      setFormData({ nombre: "", email: "", asunto: "", texto: "" });
    } catch (error) {
      console.error(error);
      alert("Hubo un error ❌");
    }
  };
  return (
    <>
      {/* <!-- Section 5: Contact --> */}
      <section className="contact" id="contact">
        <div className="hero-content contact-container">
          <div className="contact-info glass">
            <div className="text-center">
              <h1><b>Laravel</b></h1>
            </div>
            <h3>¿Alguna pregunta?</h3>
            <p>Contactate con nosotros en el siguiente formulario.</p>
            <p>Responderemos a la brevedad.</p>

            <div className="social-links">
              <div className="glass">
                <img
                  src="https://img.icons8.com/arcade/64/physics.png"
                  alt="physics"
                />
              </div>

              <div className="glass">
                <img
                  src="https://img.icons8.com/arcade/64/music.png"
                  alt="music"
                />
              </div>
              <div className="glass">
                <img
                  src="https://img.icons8.com/arcade/64/edvard-munch.png"
                  alt="edvard-munch"
                />
              </div>
              <div className="glass">
                <img
                  src="https://img.icons8.com/arcade/64/america.png"
                  alt="america"
                />
              </div>
              <div className="glass">
                <img
                  src="https://img.icons8.com/arcade/64/books.png"
                  alt="books"
                />
              </div>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nombre"
                required
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Asunto"
                required
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                rows={5}
                placeholder="Tu mensaje"
                required
                id="texto"
                name="texto"
                value={formData.texto}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envía tu consulta
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
