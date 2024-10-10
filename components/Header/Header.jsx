import { storyblokEditable } from "@storyblok/react/rsc";
import "./Header.css"; // Vergeet niet de styling te importeren

const Header = ({ blok }) => {
  return (
    <header className="header">
      {/* Dynamisch logo van Storyblok */}
      <div className="logo-container" {...storyblokEditable(blok)}>
        <img src={blok.logo.filename} alt={blok.logo.alt} className="logo" />
      </div>
      <ul className="flex flex-row text-white gap-20">
        <li>Home</li>
        <a href="/nieuws">
          <li>Nieuws</li>
        </a>
        <a href="interviews">
          <li>Interviews</li>
        </a>
        <a href="artikelen">
          <li>Artikelen</li>
        </a>
        <a href="evenementen-webinars">
          <li>Evenementen & webinairs</li>
        </a>
      </ul>

      {/* Navigatiebalk */}
      {/* <nav className="nav-bar">
        <ul className="nav-list">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.url} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Zoeken..." className="search-input" />
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
