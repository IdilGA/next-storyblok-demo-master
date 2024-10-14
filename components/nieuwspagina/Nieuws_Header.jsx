import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Header.css";
 
const Nieuws_Header = ({ blok }) => (
  <div className="Nieuws_Header" {...storyblokEditable(blok)}>
    <h1 className="Nieuws_Titel">{blok.Nieuws_Titel}</h1>
  </div>
);
 
 
export default Nieuws_Header;