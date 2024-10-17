import { storyblokEditable } from "@storyblok/react/rsc";
import "./Header.css"; // Vergeet niet je CSS-bestand te importeren

const Header = ({ blok }) => {
  return (
    <header className="header">
      {/* Logo sectie */}
      <div className="logo-container" {...storyblokEditable(blok)}>
        <img src={blok.logo.filename} alt={blok.logo.alt} className="logo" />
      </div>

      {/* Auth-buttons container boven de navigatiebalk */}
      <div className="auth-buttons-container">
        <div className="auth-buttons">
          <a href={blok.register_link.url} className="auth-button bg-blue-400">
            {blok.register_text}
          </a>
          <a href={blok.login_link.url} className="auth-button bg-red-400">
            {blok.login_text}
          </a>
        </div>
      </div>
      <ul className="flex flex-row text-white gap-20">
        <li>Home</li>
        <a href="/nieuws">
          <li>Nieuws</li>
        </a>
        <a href="interviews">
          <li>Interviews</li>
        </a>
        <a href="artikelen-pagina">
          <li>Artikelen</li>
        </a>
        <a href="evenementen-webinars">
          <li>Evenementen & webinairs</li>
        </a>
      </ul>

      {/* Navigatiebalk */}
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/nieuws" className="nav-link hover:text-orange-300">
              Nieuws
            </a>
          </li>
          <li className="nav-item">
            <a href="/interviews" className="nav-link hover:text-orange-300">
              Interviews
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/artikelen-pagina"
              className="nav-link hover:text-orange-300"
            >
              Artikelen
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/evenementen-webinars"
              className="nav-link hover:text-orange-300"
            >
              Evenementen & Webinars
            </a>
          </li>
        </ul>

        {/* Zoekbalk */}
        <div className="search-bar">
          <input type="text" placeholder="Zoeken..." className="search-input" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
