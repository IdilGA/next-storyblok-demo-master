import { storyblokEditable } from "@storyblok/react/rsc";
import "./footer.css";

const Footer = ({ blok }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TrendFocus Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">TrendFocus</h3>
          <ul>
            {blok.trendfocus_links.map((link) => (
              <li key={link._uid}>
                {/* Link Tekst en URL uit Storyblok multi-options */}
                <a href={link.link.url} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mijn TrendFocus Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">My TrendFocus</h3>
          <ul>
            {blok.mytrendfocus_links.map((link) => (
              <li key={link._uid}>
                {/* Link Tekst en URL uit Storyblok multi-options */}
                <a href={link.link.url} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            {blok.contact_links.map((link) => (
              <li key={link._uid}>
                {/* Link Tekst en URL uit Storyblok multi-options */}
                <a href={link.link.url} className="footer-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            {blok.social_media.map((icon) => (
              <a key={icon._uid} href={icon.link.url} className="social-icon">
                {/* Social Media Icon en URL uit Storyblok multi-assets */}
                <img src={icon.image.filename} alt={icon.image.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contactformulier */}
      <div className="footer-contactform">
        <h3 className="footer-heading">Contactformulier</h3>
        <form className="contact-form">
          <input type="text" placeholder="Naam" className="form-input" />
          <input
            type="email"
            placeholder="E-mailadres"
            className="form-input"
          />
          <textarea placeholder="Bericht" className="form-textarea"></textarea>
          <button type="submit" className="form-button">
            Verzenden
          </button>
        </form>
      </div>

      {/* Hardcoded footer-bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 TrendFocus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
