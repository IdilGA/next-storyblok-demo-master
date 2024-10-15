import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Interview_headline.css";





const Interview_headline = ({ blok }) => (
  <div className="Interview_headline" {...storyblokEditable(blok)}>
    <img
                className="Artikel_lijn"
                src={blok.interviews_lijn.filename}
    />
<div className="flex items-center justify-between w-[870px]" >
  <img class=" interview_hero w-40 h-40"
                  src={blok.headline_afbeelding.filename}
      />
    <div className=" h-[100px] flex flex-col justify-between">
      <div className="headline_quote">{render(blok.headline_quote)}</div>
      <div className="flex justify-end">
        <button className="interview_button">Lees verder</button>
      </div>
    </div>
</div>
 

<img
                className="Artikel_lijn"
                src={blok.interviews_lijn2.filename}
    />

</div>
  
);
 
 
export default Interview_headline;
