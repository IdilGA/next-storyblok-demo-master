import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_paragraaf.css";


const Artikel_Paragraaf = ({ blok }) => (
  <div className="Artikel_Paragraaf" {...storyblokEditable(blok)}>
    <div className="Artikel_paragraaf_header">
    <img
        // src={blok.info_point_blauw.filename}
        style={{ width: '21px', height: '21px' }}
      />
      <h1>{blok.Artikel_alinea_header}</h1>
    </div>
      <p className="Artikel_alinea">{blok.Artikel_alinea}</p>


    <div className="Artikel_paragraaf_header">
    <img
        // src={blok.info_point_blauw.filename}
        style={{ width: '21px', height: '21px' }}
      />
      <h1>{blok.Artikel_alinea_header}</h1>
    </div>
    <p className="Artikel_alinea">{blok.Artikel_alinea}</p>


  </div>
  
);
 
 
export default Artikel_Paragraaf;
