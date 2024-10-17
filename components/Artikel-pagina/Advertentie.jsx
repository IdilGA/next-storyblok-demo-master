import { storyblokEditable } from "@storyblok/react/rsc";
import "./advertentie.css";


const Advertentie = ({ blok }) => (
  <div className="Artikel_Quote_container" {...storyblokEditable(blok)}>
    <img
        src={blok.advertentie1.filename}
        style={{ width: '400px'}}
      />
  </div>
  
);
 
 
export default Advertentie;
