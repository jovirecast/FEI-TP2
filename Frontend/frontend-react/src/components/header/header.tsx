export default function Header() {
  return (
    <>
      <header className="glass">
        <nav>
          <a href="#home" className="logo">
            <svg
              className="logo-icon"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#e0a3ff" }} />
                  <stop offset="50%" style={{ stopColor: "#ff69b4" }} />
                  <stop offset="100%" style={{ stopColor: "#9370db" }} />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="30"
                r="8"
                fill="url(#logoGradient)"
                opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="30"
                cy="60"
                r="6"
                fill="url(#logoGradient)"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="70"
                cy="65"
                r="7"
                fill="url(#logoGradient)"
                opacity="0.7"
              >
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <line
                x1="50"
                y1="30"
                x2="30"
                y2="60"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="50"
                y1="30"
                x2="70"
                y2="65"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="30"
                y1="60"
                x2="70"
                y2="65"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
            NEURALGLASS
          </a>
          <ul className="nav-links">
            <li>
              <a href="#features">Neural</a>
            </li>
            <li>
              <a href="#showcase">Matrix</a>
            </li>
            <li>
              <a href="#timeline">Evolution</a>
            </li>
            <li>
              <a href="#contact">Connect</a>
            </li>
            <li>
              <a
                href="https://example.com"
                target="_blank"
                className="external-link"
              >
                External
              </a>
            </li>
          </ul>
          <div className="mobile-menu-toggle">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </nav>
        <div className="mobile-nav">
          <a href="#features">Neural</a>
          <a href="#showcase">Matrix</a>
          <a href="#timeline">Evolution</a>
          <a href="#contact">Connect</a>
          <a href="https://example.com" target="_blank" className="external-link">
            External
          </a>
        </div>
      </header>
    </>
  );
}
