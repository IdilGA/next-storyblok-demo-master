import { storyblokEditable } from "@storyblok/react/rsc";
import "./Hero_Secondary.css";

const Hero_Secondary = ({ blok }) => (
  <div
    className="Hero_Secondary mt-20 flex flex-col justify-center items-center"
    {...storyblokEditable(blok)}
  >
    <div className="flex justify-around w-[95vw]">
      <div className=" flex flex-col items-center text-left w-[36%]">
        <img
          className="rounded-tl-[10px] rounded-br-[10px]"
          src={blok.Hero_secondary_afbeelding2.filename}
        />
        <img
          className="rounded-tl-[10px] rounded-br-[10px]"
          src={blok.Hero_secondary_afbeelding1.filename}
        />
      </div>
    </div>

    <div>
      <img className="mt-10 w-[95vw]" src={blok.secondary_lijn.filename} />
    </div>
  </div>
);

export default Hero_Secondary;
