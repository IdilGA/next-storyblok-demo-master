import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import "./Footer.css";

const Footer = ({ blok }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TrendFocus Links Sectie met RichText */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">TrendFocus</h3>
          <div className="footer-text">
            {renderRichText(blok.trendfocus_links)}
          </div>
        </div>

        {/* My TrendFocus Links Sectie met RichText */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">My TrendFocus</h3>
          <div className="footer-text">
            {renderRichText(blok.mytrendfocus_links)}
          </div>
        </div>

        {/* Contact Links Sectie met RichText */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-text">
            {renderRichText(blok.contact_links)}
          </div>
        </div>

        {/* Social Media Sectie */}
        <div className="footer-section" {...storyblokEditable(blok)}>
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            {blok.social_media.map((social, index) => (
              <a key={index} href={social.cached_url} className="social-icon">
                {/* Dynamisch icoon vanuit Storyblok */}
                {social.icon && (
                  <img
                    src={social.icon.filename}
                    alt={social.icon.alt || "Social Media Icon"}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer-bottom hardcoded of dynamisch als nodig */}
      <div className="footer-bottom">
        <p>&copy; 2024 TrendFocus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
