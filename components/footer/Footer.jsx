import React from "react";
import "./Footer.css"; // Verwijst naar je eigen CSS-styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TrendFocus Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">TrendFocus</h3>
          <ul>
            <li>
              <a href="/about-us" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="footer-link">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Mijn TrendFocus Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">My TrendFocus</h3>
          <ul>
            <li>
              <a href="/login" className="footer-link">
                Login
              </a>
            </li>
            <li>
              <a href="/my-subscription" className="footer-link">
                My Subscription
              </a>
            </li>
            <li>
              <a href="/account-settings" className="footer-link">
                Account Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Links Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            <li>
              <a href="/customer-service" className="footer-link">
                Customer Service
              </a>
            </li>
            <li>
              <a href="/editorial-team" className="footer-link">
                Editorial Team
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact Form
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Sectie */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              <img src="/path-to-facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <img src="/path-to-twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <img src="/path-to-linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <img src="/path-to-instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Hardcoded footer-bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 TrendFocus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
