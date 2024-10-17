import { storyblokEditable } from "@storyblok/react/rsc";
import "./Artikelen_headline.css";





const Artikelen_headline = ({ blok }) => (
  <div className="Artikelen_header" {...storyblokEditable(blok)}>
    <img className="Headline_hero w-[95vw] mt-5 rounded-tr-[20px] rounded-bl-[20px]"
        src={blok.Headline_hero.filename}
      />
    <h1 className="Headline_titel flex justify-center mt-5 font-bold text-[30px]">{blok.Headline_titel}</h1>
    <div className=" w-[95vw] mt-2 flex justify-center">
      <p className="w-[85vw]">{blok.Headline_tekst}</p>
    </div>
    <div className="w-[95vw] flex justify-around mt-10">
    <div className="Artikel_Info">
    <img
        src={blok.info_point_blauw.filename}
        style={{ width: '21px', height: '21px' }}
      />
    <img
        className="Info_icons"
        src={blok.Auteur_icon.filename}
        style={{ width: '22px', height: '22px' }}
      />
      <p className="font-bold">{blok.Artikel_Auteur}</p>
    </div>

    <div className="Artikel_Info">
    <img
        src={blok.info_point_oranje.filename}
        style={{ width: '21px', height: '21px' }}
      />
    <img
        className="Info_icons"
        src={blok.Datum_icon.filename}
        style={{ width: '20px', height: '20px' }}
      />
      <p className="font-bold" >{blok.Artikel_Datum}</p>
    </div>

    <div className="Artikel_Info">
    <img
        src={blok.info_point_blauw.filename}
        style={{ width: '21px', height: '21px' }}
      />
    <img
        className="Info_icons"
        src={blok.Leeslijst_icon.filename}
        style={{ width: '23px', height: '23px' }}
      />
      <p className="font-bold" >{blok.Artikel_Leestijd}</p>
    </div>

    <div className="Artikel_Info">
    <img
        src={blok.info_point_oranje.filename}
        style={{ width: '21px', height: '21px' }}
      />
    <img
        className="Info_icons"
        src={blok.Gelezen_icon.filename}
        style={{ width: '26px', height: '26px' }}
      />
      <p className="font-bold">{blok.Artikel_gelezen}</p>
    </div>
    </div>
    <div className="flex justify-end w-[85vw] mt-5">
      <button className=" bg-[#76A5B9] rounded-tl-[10px] rounded-br-[10px] px-[10px] py-[3px] text-white">Lees verder</button>
    </div>
    <img className="w-[95vw] mt-5"
        src={blok.Headline_lijn.filename}
      />
  </div>
  
);
 
 
export default Artikelen_headline;
