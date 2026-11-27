import { defineCollection } from "astro/content/config";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),

    schema: z.object({
        title: z.string(),
        description: z.string().max(160),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()). default([]),
        draft: z.boolean().default(false)
    }),

});

export const collections = { posts };

