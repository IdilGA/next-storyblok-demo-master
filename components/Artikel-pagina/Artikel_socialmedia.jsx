import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_socialmedia.css";



const Artikel_socialmedia = ({ blok }) => (
  <div className="socialmedia_layout" {...storyblokEditable(blok)}>
    <h1 className="mb-10 mt-10 font-bold text-[30px]">{blok.socialmedia_titel}</h1>
    <div className="socialmedia_container">
    <img
        src={blok.X_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Instagram_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Facebook_icon.filename}
        style={{ width: '35px' }}
      />
      <img
        src={blok.Linkedin_icon.filename}
        style={{ width: '35px' }}
      />
    </div>

  </div>
  
);
 
 
export default Artikel_socialmedia;
