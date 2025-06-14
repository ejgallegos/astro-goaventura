import { defineCollection, z } from "astro:content";

const sectionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  section: sectionCollection,
};