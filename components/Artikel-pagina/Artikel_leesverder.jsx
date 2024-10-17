import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_leesverder.css";


const Artikel_leesverder = ({ blok }) => (
  <div className="Artikel_leesverder" {...storyblokEditable(blok)}>
    <h1>{blok.Leesverder_titel}</h1>

    <div className="leesverder_container">
      <div className="container_boven">
        <div className="leesverder_artikel">
        <img
        src={blok.Leesverder_afbeelding.filename}
        style={{ width: '75px'}}
      />
      <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
      <button>Lees meer</button>
        </div>
        <div className="leesverder_artikel">
        <img
        src={blok.Leesverder_afbeelding.filename}
        style={{ width: '75px'}}
      />
      <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
      <button>Lees meer</button>
        </div>
      </div>
      <div className="container_onder">
        <div className="leesverder_artikel">
        <img
        src={blok.Leesverder_afbeelding.filename}
        style={{ width: '75px'}}
      />
      <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
      <button>Lees meer</button>
        </div>
        <div className="leesverder_artikel">
        <img
        src={blok.Leesverder_afbeelding.filename}
        style={{ width: '75px'}}
      />
      <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
      <button>Lees meer</button>
        </div>
      </div>
    </div>
  </div>
  
  
);

export default Artikel_leesverder;
