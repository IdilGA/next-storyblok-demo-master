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
import Nieuws_Header from "./nieuwspagina/Nieuws_Header";
import Nieuws_Nieuws from "./nieuwspagina/Nieuws_Nieuws";
import Nieuws_Lijn from "./nieuwspagina/Nieuws_Lijn";
import Nieuws_Interviews from "./nieuwspagina/Nieuws_Interviews";
import Nieuws_Advertentie from "./nieuwspagina/Nieuws_Advertentie";
 
const components = {
  page: Page,
  feature: Feature,
  header: Header,
  evenementen_intro: evenementen_intro,
  Nieuws_Header : Nieuws_Header,
  Nieuws_Nieuws : Nieuws_Nieuws,
  Nieuws_Lijn : Nieuws_Lijn,
  Nieuws_Interviews : Nieuws_Interviews,
  Nieuws_Advertentie : Nieuws_Advertentie,
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