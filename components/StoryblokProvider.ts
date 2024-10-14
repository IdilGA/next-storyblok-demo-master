"use client";
 
import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import Header from "./header/Header";
import evenementen_intro from "./Events/evenementen_intro";
import artikel_intro from "./Artikel-pagina/Artikel_intro";
import Artikel_Hero from "./Artikel-pagina/Artikel_Hero";
import Artikel_info from "./Artikel-pagina/Artikel_info";
import Artikel_Paragraaf from "./Artikel-pagina/Artikel_Paragraaf";
import Artikel_Quote from "./Artikel-pagina/Artikel_Quote";
import Advertentie from "./Artikel-pagina/Advertentie";
import Artikel_Plaatsreactie from "./Artikel-pagina/Artikel_Plaatsreactie";
import Artikel_socialmedia from "./Artikel-pagina/Artikel_socialmedia";
 
const components = {
  page: Page,
  feature: Feature,
  header: Header,
  evenementen_intro: evenementen_intro,
  artikel_intro : artikel_intro,
  Artikel_Hero : Artikel_Hero,
  Artikel_info : Artikel_info,
  Artikel_Paragraaf : Artikel_Paragraaf,
  Artikel_Quote : Artikel_Quote,
  Advertentie : Advertentie,
  Artikel_Plaatsreactie : Artikel_Plaatsreactie,
  Artikel_socialmedia : Artikel_socialmedia,
};
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});
 
export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
 
console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);