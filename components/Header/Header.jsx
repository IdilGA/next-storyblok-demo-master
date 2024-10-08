import React from 'react';
import './Header.css';  // Vergeet niet de styling te importeren

const Header = ({ logo, links }) => {
  return (
    <header className="header">
      {/* Dynamisch logo van Storyblok */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Navigatiebalk */}
      <nav className="nav-bar">
        <ul className="nav-list">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.url} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
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
