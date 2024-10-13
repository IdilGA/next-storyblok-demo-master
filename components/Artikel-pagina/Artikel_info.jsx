import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_info.css";

 
const Artikel_info = ({ blok }) => (
  <div className="Artikel_Info_container" {...storyblokEditable(blok)}>
    <div className="Artikel_data">
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
      <p >{blok.Artikel_Auteur}</p>
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
      <p >{blok.Artikel_Datum}</p>
    </div>

    <div className="Artikel_Info">
    <img
        src={blok.info_point_blauw.filename}
        style={{ width: '21px', height: '21px' }}
      />
    <img
        className="Info_icons"
        src={blok.Leestijd_icon.filename}
        style={{ width: '23px', height: '23px' }}
      />
      <p >{blok.Artikel_Leestijd}</p>
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
      <p >{blok.Artikel_gelezen}</p>
    </div>

    </div>
   
    <div className="Button_layout">
      <div className="Button_container">
      <button className="Luisteren_button">
        Luisteren
        <img
        src={blok.Luisteren_icon.filename}
        style={{ width: '21px' }}
      />
        </button>
      <button className="Leeslijst_button">
        Leeslijst
        <img
        src={blok.Leeslijst_icon.filename}
        style={{ width: '18px' }}
      />
        </button>
      </div>
    </div>
    
  </div>
);
 
 
export default Artikel_info;
