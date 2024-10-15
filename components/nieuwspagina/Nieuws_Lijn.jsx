import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Lijn.css";
 
const Nieuws_Lijn = ({ blok }) => (
  <div className="Nieuws_Lijn" {...storyblokEditable(blok)}>

  </div>
);
 
 
export default Nieuws_Lijn;