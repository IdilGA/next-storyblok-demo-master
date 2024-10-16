import { storyblokEditable } from "@storyblok/react/rsc";
import "./Footer.css"; // Vergeet niet de styling te importeren

const Footer = ({ blok }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Linker sectie met logo */}
        <div className="footer-left" {...storyblokEditable(blok)}>
          {/* Logo linksboven */}
          <div className="logo-container mb-6">
            {blok.logo ? (
              <img
                src={blok.logo.filename}
                alt={blok.logo.alt || "TrendFocus Logo"}
                className="footer-logo"
              />
            ) : (
              <p>Logo ontbreekt</p>
            )}
          </div>
        </div>

        {/* Rechter sectie met footersecties naast de logo */}
        <div className="footer-sections flex justify-between">
          <div className="footer-section" {...storyblokEditable(blok)}>
            <h3 className="footer-heading">TrendFocus</h3>
            <ul>
              <li className="footer-text">Over ons</li>
              <li className="footer-text">Werken bij</li>
              <li className="footer-text">Auteursrecht</li>
              <li className="footer-text">Privacy</li>
              <li className="footer-text">App</li>
              <li className="footer-text">Adverteren</li>
            </ul>
          </div>

          <div className="footer-section" {...storyblokEditable(blok)}>
            <h3 className="footer-heading">My TrendFocus</h3>
            <ul>
              <li className="footer-text">Word abonnee</li>
              <li className="footer-text">Inloggen</li>
              <li className="footer-text">Account aanmaken</li>
              <li className="footer-text">Digitale krant</li>
              <li className="footer-text">Mijn abonnement</li>
              <li className="footer-text">Nieuwsbrieven</li>
              <li className="footer-text">Privacyvoorkeuren</li>
              <li className="footer-text">Webinars</li>
            </ul>
          </div>

          <div className="footer-section" {...storyblokEditable(blok)}>
            <h3 className="footer-heading">Contact</h3>
            <ul>
              <li className="footer-text">Redactie</li>
              <li className="footer-text">Opinieredactie</li>
              <li className="footer-text">Klantenservice</li>
              <li className="footer-text">Contactformulier</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Sectie onder de links */}
      <div className="footer-social">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="social-icons">
          {blok.social_media && (
            <img
              src={blok.social_media.filename}
              alt={blok.social_media.alt || "Social Media Icon"}
              className="social-icon"
            />
          )}
          {blok.social_media1 && (
            <img
              src={blok.social_media1.filename}
              alt={blok.social_media1.alt || "Social Media Icon"}
              className="social-icon"
            />
          )}
          {blok.social_media2 && (
            <img
              src={blok.social_media2.filename}
              alt={blok.social_media2.alt || "Social Media Icon"}
              className="social-icon"
            />
          )}
          {blok.social_media3 && (
            <img
              src={blok.social_media3.filename}
              alt={blok.social_media3.alt || "Social Media Icon"}
              className="social-icon"
            />
          )}
        </div>
      </div>

      {/* Footer-bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 TrendFocus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
