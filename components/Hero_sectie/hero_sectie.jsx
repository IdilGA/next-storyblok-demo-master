import React from "react";
import { storyblokEditable } from "@storyblok/react"; // 
import from "./hero_sectie.css";

const Hero = ({ blok }) => {
  return (
    <section className="hero_sectie" {...storyblokEditable(blok)}>
      {/* Afbeelding */}
      <img
        className="hero_afbeelding"
        src={blok.afbeelding?.filename}
        alt={blok.afbeelding?.alt || "Hero Image"}
      />

      {/* Titel */}
      <h1 className="hero_title">{blok.hero_titel}</h1>

      {/* Call-to-Action Button */}
      <a href={blok.link_button.url} className="hero_button">
        {blok.link_button_text}
      </a>
    </section>
  );
};

export default Hero;
