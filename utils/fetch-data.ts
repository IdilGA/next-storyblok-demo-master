import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbResult,
} from "@storyblok/react/rsc";

interface FetchDataResponse {
  story: any; // Replace 'any' with the actual type of your story
}

interface FetchDataResult {
  data: FetchDataResponse;
  status: number;
}

console.log("dit is de fetch data bestand");

async function fetchData(slug?: string): Promise<FetchDataResult> {
  console.log(`HEEUUUUH ${slug}`);
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_links: "url",
    cv: Date.now(), // Use the current timestamp as a cache buster
  };
  try {
    const response: ISbResult = await storyblokApi.get(
      `cdn/stories${slug ? `/${slug}` : ""}`,
      sbParams,
      {
        cache: "no-store",
      }
    );
    console.log(sbParams);

    // Handle case where there is no story
    return {
      data: response.data,
      status: 200, // Default status indicating that the story was not found
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: {
        story: null,
      }, // Optionally provide default data in case of an error
      status: 404, // Indicate an internal server error
    };
  }
}

export default fetchData;
