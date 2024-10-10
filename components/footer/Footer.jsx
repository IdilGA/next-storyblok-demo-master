import { storyblokEditable } from "@storyblok/react";
import "./Footer.css";
const Footer = ({ blok }) => (
  <div className="blok-footer" {...storyblokEditable(blok)}>
    <h1>footer</h1>
  </div>
);

export default Footer;
