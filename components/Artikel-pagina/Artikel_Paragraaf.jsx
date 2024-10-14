import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_paragraaf.css";


const Artikel_Paragraaf = ({ blok }) => (
  <div className="Artikel_Paragraaf" {...storyblokEditable(blok)}>
    <div className="Artikel_paragraaf_container">
      <div className="Artikel_header">
      <h2 className="paragraaf_header">{blok.Artikel_alinea_header}</h2>
      </div>
      <div className="Artikel_alinea">
        <p>{blok.Artikel_alinea}</p>
      </div>
    </div>
  </div>
  
);
 
 
export default Artikel_Paragraaf;
