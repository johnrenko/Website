import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: () => z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM
    summary: z.string(),
    cover: z.string(),
    role: z.string().optional(),
    impact: z.string().optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional()
  })
});

const experiments = defineCollection({
  schema: () => z.object({
    title: z.string(),
    date: z.string(),
    thumb: z.string(),
    note: z.string().optional()
  })
});

export const collections = { work, experiments };


