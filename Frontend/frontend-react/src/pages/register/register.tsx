import { useState } from "react";

export default function Register() {
  const strapiUrl = import.meta.env.VITE_API_STRAPI;

  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(strapiUrl + "/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!res.ok) throw new Error("Error al enviar el formulario");

      const data = await res.json();
      console.log("Guardado en Strapi:", data);

      alert("Te registraste exitosamente ✅");
      setFormData({ nickname: "", email: "", password: ""});
    } catch (error) {
      console.error(error);
      alert("Hubo un error en tu registro ❌");
    }
  };
  return (
    <>
      {/* <!-- Section 5: Contact --> */}
      <section className="contact" id="contact">
        <div className="hero-content contact-container ">
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="text-center contact-info">
              <h3 className="text-[20px]">
                ¿Querés ser parte de nuestros usuarios?
              </h3>
            </div>
            <div className="p-4">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Usuario"
                  required
                  id="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Contraseña"
                  required
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Registrate
            </button>
          </form>

          <div className="hero-content contact-container">
            {/* <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="text-center contact-info">
                <h3 className="text-[20px]">¿Ya te registraste?</h3>
                <p>Validá tus credenciales</p>
              </div>
              <div className="p-4">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Usuario"
                    required
                    id="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Verificá tu usuario
              </button>
            </form> */}
          </div>
        </div>
      </section>
    </>
  );
}
