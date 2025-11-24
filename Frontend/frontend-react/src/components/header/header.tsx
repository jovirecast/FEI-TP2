import Logo from "/logos/main.svg";
import { useEffect } from "react";
import { Link} from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/templatemo-neural-scripts.js'; // ruta relativa desde "public"
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // limpiar cuando el componente se desmonte
    };
  }, []);

  return (
    <>
      <header className="glass w-8/9">
        <nav>
          <div className="w-full flex flex-row justify-between items-center gap-1 ">
            <div className="flex flex-col justify-center">
              <img src={Logo} alt="Logo" className="h-18 w-auto" />
              <h1 className="text-[18px] flex justify-center items-center  text-white istok-web-bold border-b-1 border-white">
                I Know More Than You!
              </h1>
            </div>
            <div className="flex flex-row">
              <ul className="nav-links">
                <li>
                  <Link to="/">
                    Información del juego
                  </Link>
                </li>                
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/contactLaravel">
                      Contacto
                    </Link>
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/triviaLaravel">
                      Trivia Test
                    </Link>
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/avatarSelect">
                      API Dice Bear
                    </Link>
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/registerLaravel">
                      Registrarse
                    </Link>
                  </li>
                </div>
              </ul>
              
            </div>
            <div className="mobile-menu-toggle">
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </div>
          </div>
        </nav>
        <div className="mobile-nav">
          <Link to="/">
            Información del juego
          </Link>
          <Link to="/registerLaravel">
            Registrarse
          </Link>
          <Link to="/contactLaravel">
            Contacto
          </Link>
          <Link to="/triviaLaravel">
            Trivia Test
          </Link>
        </div>

      </header>
    </>
  );
}
