import { storyblokEditable } from "@storyblok/react/rsc";
import "./Netbinnen_sidebar.css";
 
const Netbinnen_sidebar = ({ blok }) => (

<div className="Netbinnen_sidebar ml-[30px] mt-5" {...storyblokEditable(blok)}>
<div className="flex flex-col w-[440px]">
  <div className="flex flex-row">
      <img className="afbeelding-design w-[75px]"
        src={blok.Netbinnen_afbeelding.filename}
      />
      <div className="flex flex-col">
        <div className="flex ml-3 w-[350px]">
        <p className="text-left text-[14px] font-bold">{blok.Netbinnen_tekst}</p>
        </div>
        <div className="flex justify-end">
        <button className="interview_button2">Lees verder</button>
        </div>
      </div>
  </div>
      <img className="mt-3 w-[100%]"
        src={blok.Netbinnen_lijn.filename}
      />
</div>
</div>
);

export default Netbinnen_sidebar;