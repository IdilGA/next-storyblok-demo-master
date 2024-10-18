import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Interview_layout from "../interview_layout/Interview_layout";

const Container = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className=" flex">
      <div className="flex justify-between w-[98vw]"> {/* Hier voeg je de `flex` class toe */}
        {blok.components &&
          blok.components.map((nestedBlok) => {
            if (nestedBlok.component === "interview_layout") {
              return (
                <Interview_layout blok={nestedBlok} key={nestedBlok._uid} />
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Container;
