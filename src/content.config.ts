import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: () => z.object({
    title: z.string(),
    // Lower numbers appear first. If omitted, item will be sorted after those with an order.
    order: z.number().int().optional(),
    date: z.string(), // YYYY-MM
    summary: z.string(),
    cover: z.string(),
    company: z.string().optional(),
    companyDescription: z.string().optional(),
    role: z.string().optional(),
    roleDescription: z.string().optional(),
    impact: z.string().optional(),
    impactDescription: z.string().optional(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    locale: z.enum(['en', 'fr']).default('en'),
    id: z.string().optional()
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


