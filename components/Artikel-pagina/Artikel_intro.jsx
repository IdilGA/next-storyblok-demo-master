import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_intro.css";
 
const artikel_intro = ({ blok }) => (
  <div className="Artikel_Intro" {...storyblokEditable(blok)}>
    <p className="Artikel_Titel">{blok.artikel_titel}</p>
    <img
                className="Artikel_lijn"
                src={blok.artikel_lijn.filename}
                alt={blok.artikel_lijn || "servicephoto"}
    />
    <p className="Artikel_Titel">{blok.artikel_inleiding}</p>
  </div>
);
 
 
export default artikel_intro;
