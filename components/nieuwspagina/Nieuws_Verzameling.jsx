import { storyblokEditable } from "@storyblok/react/rsc";
import "./Nieuws_Verzameling.css";

const Nieuws_Verzameling = ({ blok }) => (
  <div className="Nieuws_Verzameling flex flex-col justify-center items-center" {...storyblokEditable(blok)}>
    <div className="flex w-[100%] justify-around">
      <div className="div1"> 
        <h2 className="font-bold text-[20px]">{blok.Titel_1}</h2>
        <div className="flex items-center w-[91%] mt-3">
          <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
            <p>{blok.Tijd_1}</p>
          </div>
          <h3>{blok.Auteur_1}</h3>
        </div>
        <p className="w-[91%] text-[15px] mt-1">{blok.Desc_1}</p>
        <div className="w-[91%] flex justify-end">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>

      <div className="div1 flex flex-col items-center text-left w-[36%]"> 
        <h2 className="font-bold text-[20px]">{blok.Titel_2}</h2>
        <div className="flex items-center w-[91%] mt-3">
          <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
            <p>{blok.Tijd_2}</p>
          </div>
          <h3>{blok.Auteur_2}</h3>
        </div>
        <p className="w-[91%] text-[15px] mt-1">{blok.Desc_2}</p>
        <div className="w-[91%] flex justify-end">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>

      <div className="div1 flex flex-col items-center text-left w-[36%]"> 
        <h2 className="font-bold text-[20px]">{blok.Titel_3}</h2>
        <div className="flex items-center w-[91%] mt-3">
          <div className="rounded-tl-[10px] rounded-br-[10px] bg-[#F56D47] px-[10px] py-[3px] text-white mr-3">
            <p>{blok.Tijd_3}</p>
          </div>
          <h3>{blok.Auteur_3}</h3>
        </div>
        <p className="w-[91%] text-[15px] mt-1">{blok.Desc_3}</p>
        <div className="w-[91%] flex justify-end">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
    </div>
  </div>
);

export default Nieuws_Verzameling;
