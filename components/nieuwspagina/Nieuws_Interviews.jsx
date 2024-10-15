import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Interviews.css";
 
const Nieuws_Interviews = ({ blok }) => (
  <div className="Nieuws_Interviews" {...storyblokEditable(blok)}>

  </div>
);
 
 
export default Nieuws_Interviews;