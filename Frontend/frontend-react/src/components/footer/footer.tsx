import { Link } from "react-router-dom";

export default function Footer() {
    return (

        // Footer -->
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/">
                        Información del juego
                    </Link>
                    <Link to="/contactLaravel">
                        Contacto
                    </Link>
                    <Link to="/registerLaravel">
                        Registrate
                    </Link>
                    <Link to="/triviaLaravel">
                        Trivia Test
                    </Link>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Términos y Condiciones</a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2025 IKMTY!. All rights not reserved...yet!</p>
                </div>
                <div className="footer-design">
                    Design: <a href="https://templatemo.com" target="_blank" rel="nofollow noopener">Templatemo</a> |
                    Enhanced by several cups of coffee |
                </div>
            </div>
        </footer>
    );
}