import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_hero.css";

const Artikel_Hero = ({ blok }) => (
  <div className="Artikel_Hero" {...storyblokEditable(blok)}>
    <div className="Hero_container">
      <img
        className="Masked_Image"
        src={blok.Artikel_afbeelding.filename}
        alt={blok.Artikel_afbeelding || "servicephoto"}
      />
    </div>
  </div>
);





export default Artikel_Hero;
