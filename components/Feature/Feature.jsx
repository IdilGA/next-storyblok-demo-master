import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
