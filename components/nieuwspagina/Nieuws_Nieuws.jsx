import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Nieuws.css";
 
const Nieuws_Nieuws = ({ blok }) => (
  <div className="Nieuws_Nieuws" {...storyblokEditable(blok)}>
      <img className="Nieuws_Afbeelding" src={blok.Nieuws_Afbeelding.filename}/>
      <h1 className="Nieuws_Artikeltitel">{blok.Nieuws_Artikeltitel}</h1>
  </div>
);
 
 
export default Nieuws_Nieuws;