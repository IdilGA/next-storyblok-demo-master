import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

type Blok = {
  _uid: string;
  component: string;
  [key: string]: unknown; // If you have specific keys, it's better to define them here
};

type PageProps = {
  blok: {
    body: Blok[];
  };
};

const Page: React.FC<PageProps> = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      // eslint-disable-next-line
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
