import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_intro.css";
 
const artikel_intro = ({ blok }) => (
  <div className="Artikel_Intro" {...storyblokEditable(blok)}>
    <p className="Artikel_Titel">{blok.artikel_titel}</p>
  </div>
);
 
 
export default artikel_intro;
