import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_plaatsreactie.css";


const Artikel_Plaatsreactie = ({ blok }) => (
  <div className="Artikel_Quote_container" {...storyblokEditable(blok)}>
    <form>
    <label for="name">Naam:</label>
    </form>
  </div>
  
);
 
 
export default Artikel_Plaatsreactie;
