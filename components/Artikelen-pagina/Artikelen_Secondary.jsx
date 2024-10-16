import { storyblokEditable } from "@storyblok/react/rsc";
import "./Artikelen_Secondary.css";





const Artikelen_Secondary = ({ blok }) => (
  <div className="Artikelen_Secondary mt-20 flex justify-center" {...storyblokEditable(blok)}>
    <div className="flex justify-around w-[95vw]">
      <div>
      <img className="rounded-tl-[10px] rounded-br-[10px]"
        src={blok.Artikelen_secondary_afbeelding2.filename}
      />
      <h2 className="font-bold text-[30px]">{blok.Artikelen_secondary_titel1}</h2>
      <div className="flex">
        <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
        <p>{blok.Artikelen_secondary_tijd1}</p>
        </div>
        <h3>
        <p>{blok.Artikelen_secondary_auteur1}</p>
        </h3>
      </div>
      <p className="w-[65%]">{blok.Artikelen_secondary_tekst1}</p>
      </div>

      <div>
      <img className="rounded-tl-[10px] rounded-br-[10px]"
        src={blok.Artikelen_secondary_afbeelding1.filename}
      />
      <h2 className="font-bold text-[30px]">{blok.Artikelen_secondary_titel2}</h2>
      <div className="flex">
      <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
        <p>{blok.Artikelen_secondary_tijd2}</p>
      </div>
        <h3>
        <p>{blok.Artikelen_secondary_auteur2}</p>
        </h3> 
      </div>
      <p className="w-[65%]">{blok.Artikelen_secondary_tekst2}</p>
      </div>

    </div>
  </div>
  
);
 
 
export default Artikelen_Secondary;
