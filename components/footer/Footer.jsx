import { storyblokEditable } from "@storyblok/react";
import "./Footer.css";
const Footer = ({ blok }) => (
  <div className="blok-footer" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Footer;
