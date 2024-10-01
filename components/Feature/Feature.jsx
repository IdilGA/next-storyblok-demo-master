import { storyblokEditable } from "@storyblok/react/rsc";
import "./Feature.css" 
const Feature = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.pimtest}
  </div>
);

export default Feature;
