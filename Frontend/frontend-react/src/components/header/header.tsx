import Logo from "/logos/main.svg";
import { Link} from "react-router-dom";

export default function Header() {
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

            {/*<a href="#home" class="logo">
                <svg class="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#e0a3ff"/>
                            <stop offset="50%" style="stop-color:#ff69b4"/>
                            <stop offset="100%" style="stop-color:#9370db"/>
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="30" r="8" fill="url(#logoGradient)" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="30" cy="60" r="6" fill="url(#logoGradient)" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="70" cy="65" r="7" fill="url(#logoGradient)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="50" y1="30" x2="30" y2="60" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                    </line>
                    <line x1="50" y1="30" x2="70" y2="65" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="30" y1="60" x2="70" y2="65" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite"/>
                    </line>
                </svg>
                NEURALGLASS
            </a> */}
            <div className="flex flex-row">
              <ul className="nav-links">
                <li>
                  <Link to="/">
                    Información del juego
                  </Link>
                </li>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/avatarSelect">
                      API Dice Bear
                    </Link>
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/triviaAPI">
                      API Open Trivia DB
                    </Link>
                  </li>
                </div>
                <div className="flex flex-col gap-2">
                  <li>
                    <Link to="/triviaSOAP">
                      Wrapper SOAP
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
          <a href="#home">Información del juego</a>
          <a href="#">Registrate</a>
          <a href="#contact">Contacto</a>
          <a
            href="https://example.com"
            target="_blank"
            className="external-link"
          >
            ¡Empezá a jugar!
          </a>
        </div>

      </header>
    </>
  );
}
