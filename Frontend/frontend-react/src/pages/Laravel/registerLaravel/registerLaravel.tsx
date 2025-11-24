import { useState } from "react";

export default function RegisterLaravel() {
  const laravelUrl = import.meta.env.VITE_API_LARAVEL;

  // --- Estado para registro ---
  const [formDataRegister, setFormDataRegister] = useState({
    usuario: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // --- Estado para login ---
  const [formDataLogin, setFormDataLogin] = useState({
    identifier: "", // name o email
    password: "",
  });

  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  // --- Registro ---
  const handleChangeRegister = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDataRegister({ ...formDataRegister, [e.target.id]: e.target.value });
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formDataRegister.password !== formDataRegister.confirmPassword) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }
    if (formDataRegister.usuario.length < 3) {
      alert("El usuario debe tener al menos 3 caracteres ❌");
      return;
    }

    if (formDataRegister.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres ❌");
      return;
    }

    try {
      const res = await fetch(`${laravelUrl}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: formDataRegister.usuario,
          email: formDataRegister.email,
          password: formDataRegister.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Te registraste exitosamente ✅");
        setFormDataRegister({
          usuario: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(
          `Error en registro ❌: ${data.error?.message || JSON.stringify(data)}`
        );
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error en tu registro ❌");
    }
  };

  // --- Login ---
  const handleChangeLogin = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDataLogin({ ...formDataLogin, [e.target.id]: e.target.value });
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginMessage(null);

    try {
      const res = await fetch(`${laravelUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: formDataLogin.identifier,
          password: formDataLogin.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setLoginMessage("✅ Credenciales correctas");
        // console.log("JWT token:", data.jwt);
        console.log(data);
      } else {
        setLoginMessage(`❌ Usuario o contraseña incorrectos`);
      }
    } catch (error) {
      console.error(error);
      setLoginMessage("❌ Error al validar usuario");
    }
  };

  return (
    <section className="contact" id="register">
      <div className="hero-content contact-container ">
        {/* --- FORMULARIO REGISTRO --- */}
        <form className="contact-form glass" onSubmit={handleSubmitRegister}>
          <div className="text-center contact-info">
            {/* <h1><b>Laravel</b></h1> */}
            <h3 className="text-[20px]">
              ¿Querés ser parte de nuestros usuarios?
            </h3>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Usuario"
              required
              id="usuario"
              value={formDataRegister.usuario}
              onChange={handleChangeRegister}
            />
            <p className="text-red-500 text-sm">
              {formDataRegister.usuario.length > 0 &&
                formDataRegister.usuario.length < 3 &&
                "Usuario demasiado corto"}
            </p>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              id="email"
              value={formDataRegister.email}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="form-group">
            <div className="relative mb-2">
              <div className="form-group">
                <input
                  type={showPasswordRegister ? "text" : "password"}
                  placeholder="Contraseña"
                  required
                  id="password"
                  value={formDataRegister.password}
                  onChange={handleChangeRegister}
                />
                <p className="text-red-500 text-sm">
                  {formDataRegister.password.length > 0 &&
                    formDataRegister.password.length < 6 &&
                    "Contraseña demasiado corta"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm"
              >
                {showPasswordRegister ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="form-group">
              <input
                type={showPasswordRegister ? "text" : "password"}
                placeholder="Repetí la contraseña"
                required
                id="confirmPassword"
                value={formDataRegister.confirmPassword}
                onChange={handleChangeRegister}
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Registrate
          </button>
        </form>

        {/* --- FORMULARIO LOGIN --- */}
        <form className="contact-form glass" onSubmit={handleSubmitLogin}>
          <div className="text-center contact-info">
            <h3 className="text-[20px]">¿Ya te registraste?</h3>
            <p>Validá tus credenciales</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Usuario"
              required
              id="identifier"
              value={formDataLogin.identifier}
              onChange={handleChangeLogin}
            />
          </div>
          <div className="form-group">
            <div className="relative">
              <input
                type={showPasswordLogin ? "text" : "password"}
                placeholder="Contraseña"
                required
                id="password"
                value={formDataLogin.password}
                onChange={handleChangeLogin}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm"
                onClick={() => setShowPasswordLogin(!showPasswordLogin)}
              >
                {showPasswordLogin ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Verificá tu usuario
          </button>
          {loginMessage && <p className="mt-2 text-center">{loginMessage}</p>}
        </form>
      </div>
    </section>
  );
}