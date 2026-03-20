import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['dom', 'komercyjny']),
    categoryLabel: z.string(),
    area: z.string(),
    location: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['ocieplenia', 'elewacje', 'materialy', 'dotacje', 'porady']),
    categoryLabel: z.string(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
