import { useEffect, useState } from "react";

export default function AvatarSelect() {
  const [seedAvatar, setSeedAvatar] = useState<string>();
  const [avatarUrl, setAvatarUrl] = useState<string>();

  // Cargar un avatar aleatorio al iniciar el componente
  useEffect(() => {
    randomSeedAvatar();
  }, []);

  useEffect(() => {
    if (!seedAvatar) return;
    traerAvatar();
  }, [seedAvatar]);

  const randomSeedAvatar = () => {
    const randomSeed = Math.random().toString(36).substring(2, 15);
    setSeedAvatar(randomSeed);
  };

  const traerAvatar = async () => {
    const avaUrl = `https://api.dicebear.com/9.x/bottts/svg?seed=${seedAvatar}&scale=80&radius=50&backgroundType=gradientLinear&backgroundColor=ffdfbf,ffd5dc,d1d4f9,c0aede,b6e3f4`;
    setAvatarUrl(avaUrl);
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="hero-content contact-container">
          <div className="contact-info glass">
            <div className="text-center">
            </div>
            <h3>Módulo de selección de avatar aleatorio</h3>
            <p>Este módulo hace uso de la API Dice Bear</p>
            <h3>Objetivos</h3>
            <p>Generar un avatar único aleatorio para uso del usuario</p>
          </div>
          <div className="hero" id="home">
            <div className=" p-6">
              <div className="flex flex-col glass gap-3 m-0 px-12 pb-2">
                <div className="text-center">
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center">

                </h2>

                <div className="flex flex-col items-center gap-4 w-100 mx-auto">
                  <img src={avatarUrl} alt="avatar" className="h-80"></img>
                  <p> Seed: {seedAvatar}</p>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={randomSeedAvatar}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Nuevo avatar
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