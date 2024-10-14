import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Nieuws.css";
 
const Nieuws_Nieuws = ({ blok }) => (
  <div className="Nieuws_Nieuws" {...storyblokEditable(blok)}>
    <h1 className="Nieuws_Afbeelding">{blok.Nieuws_Titel}</h1>
  </div>
);
 
 
export default Nieuws_Nieuws;