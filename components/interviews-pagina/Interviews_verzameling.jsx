import { storyblokEditable } from "@storyblok/react/rsc";
import "./Interviews_verzameling.css";





const Interviews_verzameling = ({ blok }) => (
  <div className="Interviews_verzameling mt-20 w-[60vw]" {...storyblokEditable(blok)}>
    <div className="flex flex-col justify-between">
      <div className=" flex justify-between">
        <div>
        <img className=" afbeelding-design w-[250px]"
          src={blok.interviews_afbeelding1.filename}
        />
        <p className="w-[250px] font-bold">{blok.interviews_titel1}</p>
        <div className="flex justify-end">
          <button className="interview_button2">Lees verder</button>
        </div>
        </div>
        <div>
        <img className="afbeelding-design w-[250px]"
          src={blok.interviews_afbeelding2.filename}
        />
        <p className="w-[250px] font-bold">{blok.Interviews_titel2}</p>
        <div className="flex justify-end">
          <button className="interview_button2">Lees verder</button>
        </div>
        </div>
        <div>
        <img className="afbeelding-design w-[250px]"
          src={blok.interviews_afbeelding3.filename}
        />
        <p className="w-[250px] font-bold">{blok.Interviews_titel3}</p>
        <div className="flex justify-end">
          <button className="interview_button2">Lees verder</button>
        </div>
        </div>
      </div>

      <img className="mt-10"
          src={blok.interviews_verzameling_lijn.filename}
          style={{ width: '1000px'}}
        />
    </div>
  </div>
  
);
 
 
export default Interviews_verzameling;
