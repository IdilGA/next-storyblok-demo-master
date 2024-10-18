import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Interviews_intro from "../interviews-pagina/interviews_intro";
import Interview_headline from "../interviews-pagina/Interview_headline";
import Netbinnen_sidebar from "../interviews-pagina/Netbinnen_sidebar";
import Interviews_verzameling from "../interviews-pagina/Interviews_verzameling";
import Nieuws_Verzameling from "../nieuwspagina/Nieuws_Verzameling";

const Interview_layout = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="">
      <div className="">
        {blok.components &&
          blok.components.map((nestedBlok) => {
            {
              /* // Kopieer onderstaande comment en pas de componentnaam aan, deze staan in hoofdletters
 
              else if (nestedBlok.component === "CONFIG_NAAM") {
               return <NAAM_IMPORT_COMPONENT blok={nestedBlok} key={nestedBlok._uid} />;
              }
              */
            }
            if (nestedBlok.component === "interviews_intro") {
              return (
                <Interviews_intro blok={nestedBlok} key={nestedBlok._uid} />
              );
            } else if (nestedBlok.component === "interview_headline") {
              return (
                <Interview_headline
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            }
            else if (nestedBlok.component === "netbinnen_sidebar") {
              return (
                <Netbinnen_sidebar
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            }

            else if (nestedBlok.component === "Interviews_verzameling") {
              return (
                <Interviews_verzameling
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            }
            else if (nestedBlok.component === "Nieuws_Verzameling") {
              return (
                <Nieuws_Verzameling
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              );
            }


            return null;
          })}
      </div>
    </div>
  );
};

export default Interview_layout;
