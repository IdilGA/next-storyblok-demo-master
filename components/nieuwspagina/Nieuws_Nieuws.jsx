import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Nieuws.css";
 
const Nieuws_Nieuws = ({ blok }) => (
  <div className="Nieuws_Nieuws" {...storyblokEditable(blok)}>
      <img className="Nieuws_Afbeelding" src={blok.Nieuws_Afbeelding.filename}/>
      <h1 className="Nieuws_Artikeltitel">{blok.Nieuws_Artikeltitel}</h1>
      <div className="w-[91%] flex justify-end">
   <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
  </div>
  </div>
);
 
 
export default Nieuws_Nieuws;