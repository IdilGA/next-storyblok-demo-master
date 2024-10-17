import { storyblokEditable } from "@storyblok/react/rsc";
import "./Artikelen_Secondary.css";

const Artikelen_Secondary = ({ blok }) => (
  <div className="Artikelen_Secondary mt-20 flex flex-col justify-center items-center" {...storyblokEditable(blok)}>
    <div className="flex justify-around w-[95vw]">
      <div className=" flex flex-col items-center text-left w-[36%]"> 
        <img className="rounded-tl-[10px] rounded-br-[10px]"
          src={blok.Artikelen_secondary_afbeelding2.filename}
        />
        <h2 className="font-bold text-[30px]">{blok.Artikelen_secondary_titel1}</h2>
        <div className="flex items-center w-[91%] mt-3">
          <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
            <p>{blok.Artikelen_secondary_tijd1}</p>
          </div>
          <h3>{blok.Artikelen_secondary_auteur1}</h3>
        </div>
        <p className="w-[91%] mt-1">{blok.Artikelen_secondary_tekst1}</p>
        <div className="w-[91%] flex justify-end">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>

      <div className=" flex flex-col items-center text-left w-[36%]"> 
        <img className="rounded-tl-[10px] rounded-br-[10px]"
          src={blok.Artikelen_secondary_afbeelding1.filename}
        />
        <h2 className="font-bold text-[30px]">{blok.Artikelen_secondary_titel2}</h2>
        <div className="flex items-center w-[91%] mt-3">
          <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
            <p>{blok.Artikelen_secondary_tijd2}</p>
          </div>
          <h3>{blok.Artikelen_secondary_auteur2}</h3>
        </div>
        <p className="w-[91%] mt-1">{blok.Artikelen_secondary_tekst2}</p>
        <div className="w-[91%] flex justify-end">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
    </div>

    <div>
    <img className="mt-5 w-[95vw]"
        src={blok.secondary_lijn.filename}
      />
    </div>
  </div>
);

export default Artikelen_Secondary;
