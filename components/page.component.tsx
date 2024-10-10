import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import Header from './header/Header';  // Importeer de Header component

type Blok = {
  _uid: string;
  component: string;
  [key: string]: unknown;
};

type PageProps = {
  blok: {
    body: Blok[];
    logo: {
      filename: string;
    };
  };
};

const Page: React.FC<PageProps> = ({ blok }) => {
  // Haal het logo op van Storyblok, of gebruik een fallback als er geen logo is
  const logoUrl = blok.logo?.filename || '/fallback-logo.png';  // Fallback logo als er geen asset is

  // const navLinks = [
  //   { label: 'Home', url: '/' },
  //   { label: 'Nieuws', url: '/news' },
  //   { label: 'Interviews', url: '/interviews' },
  //   { label: 'Artikelen', url: '/articles' },
  //   { label: 'Evenementen', url: '/events' },
  // ];

  return (
    <main {...storyblokEditable(blok)}>
      {/* Gebruik het logo dat van Storyblok komt */}
      {/* <Header logo={logoUrl} links={navLinks} /> */}

      {/* Render dynamisch alle blokken via Storyblok */}
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
