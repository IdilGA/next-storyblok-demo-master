import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./evenementen_intro.css";

const Evenementen_Intro = ({ blok }) => (
  <div className="evenementen_intro" {...storyblokEditable(blok)}>
    Hallo Luc
    <div className="evenement_afbeelding_container">
      <img
        className="evenement_afbeelding"
        src={blok.intro_afbeelding?.filename}
        alt={blok.intro_afbeelding?.alt || "Card One Image"}
      />
      <div className="evenement_tekst">
        {render(blok.intro_tekst)}
      </div>
      <div className="evenement_buttons">
        <a href={blok.button_1_url} className="evenement_button button_1">
          {blok.button1_text}
        </a>
        <a href={blok.button_2_url} className="evenement_button button_2">
          {blok.button2_text}
        </a>
      </div>
    </div>
  </div>
);

export default Evenementen_Intro;
