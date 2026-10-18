import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artifacts = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!README.md'], base: './src/content/artifacts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    type: z.enum(['article', 'podcast', 'research', 'talk', 'mention', 'project']),
    provenance: z.enum(['personal', 'organizational', 'appearance', 'curated']),
    frontiers: z.array(z.enum(['think', 'entangle', 'move', 'fluctuate'])).min(1),
    url: z.string().url().optional(),
    description: z.string(),
  }),
});
export const collections = { artifacts };
