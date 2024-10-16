import { storyblokEditable } from "@storyblok/react/rsc";
import "./Footer.css"; // Vergeet niet de styling te importeren

const Footer = ({ blok }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TrendFocus Links Sectie */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">TrendFocus</h3>
          <ul className="flex flex-row text-white gap-20">
            <li className="footer-text">Over ons</li>
            <li className="footer-text">Werken bij</li>
            <li className="footer-text">Auteursrecht</li>
            <li className="footer-text">Privacy</li>
            <li className="footer-text">App</li>
            <li className="footer-text">Adverteren</li>
          </ul>
        </div>

        {/* My TrendFocus Links Sectie */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">My TrendFocus</h3>
          <ul className="flex flex-row text-white gap-20">
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

        {/* Contact Links Sectie */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">Contact</h3>
          <ul className="flex flex-row text-white gap-20">
            <li className="footer-text">Redactie</li>
            <li className="footer-text">Opinieredactie</li>
            <li className="footer-text">Klantenservice</li>
            <li className="footer-text">Contactformulier</li>
          </ul>
        </div>

        {/* Social Media Sectie */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">Follow Us</h3>
          <div className="flex flex-row gap-5">
            {/* Controleer of social_media een array is voordat je .map() aanroept */}
            {Array.isArray(blok.social_media) &&
            blok.social_media.length > 0 ? (
              blok.social_media.map((social, index) => (
                <div key={index} className="social-icon">
                  {social.icon && (
                    <img
                      src={social.icon.filename}
                      alt={social.icon.alt || "Social Media Icon"}
                      className="social-icon-image"
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No social media links available</p>
            )}
          </div>
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
