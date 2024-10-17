import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_quote.css";


const Artikel_Quote = ({ blok }) => (
  <div className="Artikel_Quote_container" {...storyblokEditable(blok)}>
    <img
        src={blok.Quote_cornerLeft.filename}
        style={{ width: '25px'}}
      />
    <p className="QuoteTekst">{blok.Artikel_quote}</p>
    <img
        src={blok.Quote_cornerRight.filename}
        style={{ width: '25px'}}
      />
  </div>
  
);
 
 
export default Artikel_Quote;
