import { storyblokEditable } from "@storyblok/react/rsc";
import "./Hero_Secondary.css";

const Hero_Secondary = ({ blok }) => (
  <div
    className="Hero_Secondary mt-20 mb-20  flex flex-row justify-around items-center"
    {...storyblokEditable(blok)}
  >
    <div className="flex justify-around w-[95vw]">
      <div className=" flex flex-row items-center text-left w-[100%] justify-around">
        <img
          className="rounded-tl-[10px] rounded-br-[10px] mr-10"
          src={blok.Hero_secondary_afbeelding1.filename}
        />
        <img
          className="rounded-tl-[10px] rounded-br-[10px]"
          src={blok.Hero_secondary_afbeelding2.filename}
        />
      </div>
    </div>
  </div>
);

export default Hero_Secondary;
