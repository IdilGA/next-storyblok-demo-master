"use client";
import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import Navigatie from "./Navigatie/Navigatie";
import evenementen_intro from "./Events/evenementen_intro";
import Nieuws_Header from "./nieuwspagina/Nieuws_Header";
import footer from "./footer/Footer";
import kalender from "./kalender/kalender";
import slide from "./kalender/slide";
import carrousel from "./kalender/carrousel";
import artikel_intro from "./Artikel-pagina/Artikel_intro";
import Artikel_Hero from "./Artikel-pagina/Artikel_Hero";
import Artikel_info from "./Artikel-pagina/Artikel_info";
import Artikel_Paragraaf from "./Artikel-pagina/Artikel_Paragraaf";
import Artikel_Quote from "./Artikel-pagina/Artikel_Quote";
import Advertentie from "./Artikel-pagina/Advertentie";
import Artikel_Plaatsreactie from "./Artikel-pagina/Artikel_Plaatsreactie";
import Artikel_socialmedia from "./Artikel-pagina/Artikel_socialmedia";
import Artikel_leesverder from "./Artikel-pagina/Artikel_leesverder";
import Interviews_intro from "./interviews-pagina/interviews_intro";
import Interview_headline from "./interviews-pagina/Interview_headline";
import Interviews_verzameling from "./interviews-pagina/Interviews_verzameling";
import Netbinnen_sidebar from "./interviews-pagina/Netbinnen_sidebar";
import Artikelen_header from "./Artikelen-pagina/Artikelen_header";
import Artikelen_headline from "./Artikelen-pagina/Artikelen_headline"
import Artikelen_Secondary from "./Artikelen-pagina/Artikelen_Secondary";
import Interview_layout from "./interview_layout/Interview_layout";
import Container from "./container/Container";
import Netbinnen_header from "./interviews-pagina/Netbinnen_Header";
import Home from "./home/Home";
import artikel_landscape from "./artikel_landscape/artikel_landscape";
import artikelen_onder_layout from "./artikelen_onder_layout/artikelen_onder_layout"
import artikelen_links_layout from "./artikelen_links_layout/artikelen_links_layout";
import netbinnen_sidebar from "./interviews-pagina/Netbinnen_sidebar";
import Nieuws_Nieuws from "./nieuwspagina/Nieuws_Nieuws";
import Nieuws_Lijn from "./nieuwspagina/Nieuws_Lijn";
import Nieuws_Interviews from "./nieuwspagina/Nieuws_Interviews";
import Nieuws_Advertentie from "./nieuwspagina/Nieuws_Advertentie";
import Hero_Secondary from "./hero_Secondary/Hero_Secondary";
import Nieuws_Verzameling from "./nieuwspagina/Nieuws_Verzameling";

const components = {
  page: Page,
  feature: Feature,
  Navigatie: Navigatie,
  evenementen_intro: evenementen_intro,
  Nieuws_Header: Nieuws_Header,
  footer: footer,
  home: Home,
  Hero_Secondary: Hero_Secondary,


  kalender: kalender,
  slide: slide,
  carrousel: carrousel,



  artikel_intro: artikel_intro,
  Artikel_Hero: Artikel_Hero,
  Artikel_info: Artikel_info,
  Artikel_Paragraaf: Artikel_Paragraaf,
  Artikel_Quote: Artikel_Quote,
  Advertentie: Advertentie,
  Artikel_Plaatsreactie: Artikel_Plaatsreactie,
  Artikel_socialmedia: Artikel_socialmedia,
  Artikel_leesverder: Artikel_leesverder,

  interviews_intro: Interviews_intro,
  Interview_headline: Interview_headline,
  Interviews_verzameling: Interviews_verzameling,

  Artikelen_header: Artikelen_header,
  Artikelen_headline: Artikelen_headline,
  Artikelen_Secondary: Artikelen_Secondary,


  container: Container,
  interview_layout: Interview_layout,
  Netbinnen_header: Netbinnen_header,


  Nieuws_Nieuws: Nieuws_Nieuws,
  Nieuws_Lijn: Nieuws_Lijn,
  Nieuws_Interviews: Nieuws_Interviews,
  Nieuws_Advertentie: Nieuws_Advertentie,
  Netbinnen_sidebar: Netbinnen_sidebar,
  Nieuws_Verzameling: Nieuws_Verzameling,

  // artikel_landscape : artikel_landscape,
  // artikelen_onder_layout : artikelen_onder_layout,
  // artikelen_links_layout : artikelen_links_layout,
  // netbinnen_sidebar : netbinnen_sidebar,
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