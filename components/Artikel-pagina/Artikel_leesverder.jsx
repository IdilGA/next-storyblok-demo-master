import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_leesverder.css";


const Artikel_leesverder = ({ blok }) => (
  <div className="Artikel_leesverder" {...storyblokEditable(blok)}>
    <h1 className="mb-10 font-bold text-[30px]">{blok.Leesverder_titel}</h1>

    <div className="leesverder_container w-[70vw] h-[50vh] mb-10">
      <div className="container_boven">
        <div className="leesverder_artikel flex flex-col">
        <div className="flex justify-between  w-[90%]">
          <img
          src={blok.Leesverder_afbeelding.filename}
          style={{ width: '75px'}}
        />
        <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
        <div className="flex items-center">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
      <img className="w-[90%]"
        src={blok.leesverder_lijn.filename}
      />
        </div>

        <div className="leesverder_artikel flex flex-col">
        <div className="flex justify-between  w-[90%]">
          <img
          src={blok.Leesverder_afbeelding.filename}
          style={{ width: '75px'}}
        />
        <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
        <div className="flex items-center">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
      <img className="w-[90%]"
        src={blok.leesverder_lijn.filename}
      />
        </div>
      </div>

      <div className="container_onder">
      <div className="leesverder_artikel flex flex-col">
        <div className="flex justify-between  w-[90%]">
          <img
          src={blok.Leesverder_afbeelding.filename}
          style={{ width: '75px'}}
        />
        <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
        <div className="flex items-center">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
      <img className="w-[90%]"
        src={blok.leesverder_lijn.filename}
      />
        </div>
        <div className="leesverder_artikel flex flex-col">
        <div className="flex justify-between  w-[90%]">
          <img
          src={blok.Leesverder_afbeelding.filename}
          style={{ width: '75px'}}
        />
        <p className="leesverder_tekst">{blok.Leesverder_tekst}</p>
        <div className="flex items-center">
          <button className="rounded-tl-[10px] rounded-br-[10px] bg-[#76A5B9] px-[10px] py-[3px] text-white">Lees meer</button>
        </div>
      </div>
      <img className="w-[90%]"
        src={blok.leesverder_lijn.filename}
      />
        </div>
      </div>
    </div>
  </div>
  
  
);

export default Artikel_leesverder;
