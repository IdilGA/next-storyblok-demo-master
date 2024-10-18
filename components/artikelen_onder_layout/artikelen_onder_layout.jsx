// import React from "react";
// import { storyblokEditable } from "@storyblok/react/rsc";
// import Artikelen_links_layout from "../artikelen_links_layout/artikelen_links_layout";
// import Netbinnen_sidebar from "../interviews-pagina/Netbinnen_sidebar";

// const artikelen_onder_layout = ({ blok }) => {
//   return (
//     <div {...storyblokEditable(blok)} className="flex bg-blue-500">
//       <div className="flex justify-between w-[97vw] bg-red-700"> {/* Hier voeg je de `flex` class toe */}
//         {blok.components &&
//           blok.components.map((nestedBlok) => {
//             if (nestedBlok.component === "artikelen_links_layout") {
//               return (
//                 <Artikelen_links_layout blok={nestedBlok} key={nestedBlok._uid} />
//               );
//             }
//             if (nestedBlok.component === "netbinnen_sidebar") {
//               return (
//                 <Netbinnen_sidebar blok={nestedBlok} key={nestedBlok._uid} />
//               );
//             }
//             return null;
//           })}
//       </div>
//     </div>
//   );
// };

// export default artikelen_onder_layout;
