import { storyblokEditable } from "@storyblok/react/rsc";
import "./artikel_intro.css";
// import { Noto_Sans } from 'next/font/google';

// const notoSans = Noto_Sans({
//   subsets: ['latin'], // specificeer de taal
//   weight: ['700'], // gebruik de bold versie van het lettertype
// });
 
const artikel_intro = ({ blok }) => (
  <div className="Artikel_Intro" {...storyblokEditable(blok)}>
    <p className="Artikel_Titel">{blok.artikel_titel}</p>
    <img
                className="Artikel_lijn"
                src={blok.artikel_lijn.filename}
                alt={blok.artikel_lijn || "servicephoto"}
    />
    <div className="inleiding-layout">
    <p className="Artikel_inleiding">{blok.artikel_inleiding}</p>
    </div>
  </div>
);
 
 
export default artikel_intro;
