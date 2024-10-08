import { storyblokEditable } from "@storyblok/react/rsc";
import "./Feature.css" 
const Feature = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <h2>Dit</h2>
    {blok.name}
  </div>
);

export default Feature;
