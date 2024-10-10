import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "./Prices_intro.css";
 
const prices_intro = ({ blok }) => (
  <div className="prices_intro" {...storyblokEditable(blok)}>
    <p className="prices_accent">{blok.prices_accent}</p>
    <div className="prices_title">
            {render(blok.prices_title)}
    </div>
    <p className="prices_paragraph">{blok.prices_paragraph}</p>
  </div>
);
 
 
export default prices_intro;