import { storyblokEditable } from "@storyblok/react/rsc";
import "./Artikelen_header.css";





const Artikelen_header = ({ blok }) => (
  <div className="Artikelen_header" {...storyblokEditable(blok)}>
    <h1 className="Artikelen_titel">{blok.artikelen_titel}</h1>
    <img className="w-[95vw] mt-5"
        src={blok.Artikelen_lijn.filename}
      />
  </div>
  
);
 
 
export default Artikelen_header;
