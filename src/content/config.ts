import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const homeCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const aboutCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    order: z.number(),
  }),
});

const postsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    published_on: z.date(),
    excerpt: z.string(),
    tags: z.array(z.enum(["blog"])),
    draft: z.nullable(z.boolean()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  About: aboutCollection,
  Home: homeCollection,
  Work: postsCollection,
};
