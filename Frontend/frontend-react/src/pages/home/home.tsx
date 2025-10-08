import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            {/* <!-- Section 1: Hero --> */}
            <section className="hero" id="home">
                <div className="hero-content">
                    <div className="hero-subtitle">Bienvenidos a IKMTY!</div>
                    <h1>I KNOW MORE THAN YOU!</h1>

                    <div className="hero-description text-[30px] text-white istok-web-bold border-b-1 border-white">
                        <p>
                            "I Know More Than You!" (IKMTY!) es un party game de preguntas y
                            respuestas multijugador. Este juego busca proveer una competencia
                            donde se ponga a prueba el conocimiento de sus participantes.
                        </p>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-number">6</span>
                            <span className="hero-stat-label">Categorias de preguntas</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-number">2 a 8</span>
                            <span className="hero-stat-label">Jugadores simultáneos</span>
                        </div>

                        <div className="hero-stat">
                            <span className="hero-stat-number">6</span>
                            <span className="hero-stat-label">
                                Fichas para vencerlos a todos
                            </span>
                        </div>
                    </div>

                    <div className="cta-buttons">
                        <Link to="/register" className="cta-button">
                            Registrarse
                        </Link>
                        <Link to="/trivia" className="cta-button secondary">
                            Trivia Test
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
