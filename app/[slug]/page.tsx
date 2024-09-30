import type { NextPage } from "next";
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const { data, status } = await fetchData(slug);
  if (status === 404) {
    return notFound();
  }

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Page;
