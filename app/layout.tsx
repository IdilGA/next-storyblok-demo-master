import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <StoryblokProvider>
      <html>
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
