import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./carrousel.css";
 
const carrousel = ({ blok }) => (
  <div className=""{...storyblokEditable(blok)}>
  <div>

<h1 className="maand">{blok.maand}</h1>


<div className="container">

<div className="blok">
    <span className="datum">
        {render(blok.datum)} 
    </span> 
    <img className="image" src={blok.kaart_afbeelding.filename} />
    <img className="textvak" src={blok.kaart_textvak.filename} />

    <p className= "p-text">{blok.kaart_info}</p> 
</div>

<div className="blok">
    <span className="datum">
        {render(blok.datum2)} 
    </span> 
    <img className="image" src={blok.kaart_afbeelding2.filename} />
    <img className="textvak" src={blok.kaart_textvak.filename} />
    <p className= "p-text">{blok.kaart_info2}</p> 
</div>
</div>

<h1 className="maand2">{blok.maand2}</h1>


<div className="container2">

<div className="blok">
    <span className="datum">
        {render(blok.datum3)} 
    </span> 
    <img className="image" src={blok.kaart_afbeelding3.filename} />
    <img className="textvak" src={blok.kaart_textvak.filename} />
    <p className= "p-text">{blok.kaart_info}</p> 
</div>

<div className="blok">
    <span className="datum">
        {render(blok.datum4)} 
    </span> 
    <img className="image" src={blok.kaart_afbeelding.filename} />
    <img className="textvak2" src={blok.kaart_textvak.filename} />
    <p className= "p-text">{blok.kaart_info2}</p> 
</div>
</div>

    </div>
  </div>
    
);
 
export default carrousel;