import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"experience">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.startDate ?? b.data.endDate).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.startDate ?? a.data.endDate).getTime() / 1000
        )
    );
};

export default getSortedPosts;
