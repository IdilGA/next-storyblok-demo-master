import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Advertentie.css";
 
const Nieuws_Advertentie = ({ blok }) => (
  <div className="Nieuws_Advertentie" {...storyblokEditable(blok)}>

  </div>
);
 
 
export default Nieuws_Advertentie;