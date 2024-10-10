import { storyblokEditable } from "@storyblok/react/rsc";
import "./Footer.css"; // Vergeet niet de styling te importeren

const Footer = ({ blok }) => {
  return (
    <footer className="footer">
      {/* Dynamisch logo van Storyblok */}
      <div className="logo-container" {...storyblokEditable(blok)}></div>
    </footer>
  );
};

export default Footer;
