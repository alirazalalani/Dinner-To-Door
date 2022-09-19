import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//connection to backend (sanity)
const client = sanityClient({
  projectId: "c9fh5v7v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
