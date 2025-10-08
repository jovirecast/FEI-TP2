import { useState } from "react";

const strapiUrl = import.meta.env.VITE_API_STRAPI;

export default function Contact() {
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
            const res = await fetch(strapiUrl + "/contactos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },                
                body: JSON.stringify({ data: formData }),
            });

            if (!res.ok) throw new Error("Error al enviar el formulario");

            const data = await res.json();
            console.log("Guardado en Strapi:", data);

            alert("Consulta enviada con éxito ✅");
            setFormData({ nombre: "", email: "", asunto: "", texto: "" });
        } catch (error) {
            console.error(error);
            alert("Hubo un error ❌");
        }
    };
    return (
        <>
            {/* <!-- Epic Neural Background --> */}
            <div className="neural-background"></div>

            {/* <!-- Floating Geometric Shapes --> */}
            <div className="geometric-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            {/* <!-- Neural Network Lines --> */}
            <div className="neural-lines">
                <div className="neural-line"></div>
                <div className="neural-line"></div>
                <div className="neural-line"></div>
            </div>

            {/* <!-- Section 5: Contact --> */}
            <section className="contact" id="contact">
                <div className="hero-content contact-container">
                    <div className="contact-info glass">
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
