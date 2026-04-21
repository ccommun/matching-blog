import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
    thumbnail: z.string().optional(),
    featured: z.boolean().optional().default(false),
    affiliate: z.boolean().optional().default(false),
  }),
});

export const collections = { articles };
