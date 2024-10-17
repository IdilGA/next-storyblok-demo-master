import { storyblokEditable } from "@storyblok/react/rsc";
import "./interviews_intro.css";





const Interviews_Intro = ({ blok }) => (
  <div className="Interviews_Intro bg-orange-400" {...storyblokEditable(blok)}>
    <h1 className="interviews_titel">{blok.Interviews_titel}</h1>
  </div>
  
);
 
 
export default Interviews_Intro;
