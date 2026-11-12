import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// projects collection, case studies
// one file per project; one file per locale per project.
// files live under <locale>/<slug>.md (e.g. en/lotus-hall.md, es/lotus-hall.md)
// the custom generateId keeps the locale prefix in the id so en/lotus-hall
// and es/lotus-hall don't collide.
// ============================================================
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'es']),
    eyebrow: z.string().optional(),
    lede: z.string(),
    location: z.string(),
    // year can be a number, a year range, or 'TBD' for new drafts
    year: z.union([z.number(), z.string()]),
    area: z.string().optional(),
    typology: z.enum(['residential', 'commercial', 'institutional', 'mixed-use']),
    role: z.string().optional(),
    roleNote: z.string().optional(),
    roleNoteUrl: z.string().url().optional(), // links the role note, e.g. a design collaborator
    status: z.string().optional(),
    // hero metric (single number that earned the project) — optional;
    // omit entirely for projects where there's no defensible proof to show.
    metric: z
      .object({
        value: z.string(),
        unit: z.string().optional(),
        label: z.string(),
        note: z.string().optional(),
      })
      .optional(),
    // photo handling
    heroImage: z.string().optional(),
    // overrides the default "<title>, tropical architecture in <location>" alt
    heroAlt: z.string().optional(),
    // short visible line under the hero, e.g. to flag a render as an ai visualization
    heroCaption: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), tag: z.string().optional() })).optional(),
    // award badge (image path + caption) — appears next to the metric block
    award: z
      .object({
        logo: z.string(), // path to badge image, e.g. /projects/lotus-hall/award-paris-2024.png
        label: z.string(), // e.g. 'paris design awards · 2024 · cultural architecture'
        url: z.string().optional(), // optional outbound link
      })
      .optional(),
    // narrative
    brief: z.string().optional(),
    approach: z.string().optional(),
    // strategy stack, cumulative moves
    strategies: z
      .array(
        z.object({
          label: z.string(),
          body: z.string(),
          delta: z.string().optional(), // e.g. "-12%"
        })
      )
      .optional(),
    resultLabel: z.string().optional(),
    resultDelta: z.string().optional(),
    closingQuote: z.string().optional(),
    // simulation study, rendered by ProjectStudy.astro: key-numbers table,
    // one section per annotated graphic, method notes. graphics carry their
    // own legends, so they are shown whole (never cropped).
    study: z
      .object({
        keyNumbers: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
        // optional image beside the key numbers (e.g. a visualization)
        figure: z.object({ src: z.string(), alt: z.string(), tag: z.string().optional() }).optional(),
        panels: z.array(
          z.object({
            headline: z.string(),
            image: z.string(), // web file (webp)
            width: z.number(),
            height: z.number(),
            alt: z.string(),
            caption: z.string(),
            numbers: z
              .array(z.object({ value: z.string(), unit: z.string().optional(), label: z.string() }))
              .optional(),
            // optional live chart drawn from the study's hourly data; the image
            // above stays as the no-js fallback (and the instagram poster)
            interactive: z
              .object({
                // comfort-heatmap / surface-heatmap: StudyHeatmap.astro
                // average-day: StudyAverageDay.astro · patio: StudyPatio.astro · sunpath: StudySunpath.astro
                // hotspots: StudyHotspots.astro (clickable regions over the drawing itself)
                type: z.enum(['comfort-heatmap', 'surface-heatmap', 'average-day', 'patio', 'sunpath', 'hotspots']),
                data: z.string().optional(), // json under public/ (all types but hotspots)
                cases: z.tuple([z.string(), z.string()]).optional(), // labels for the two cases (heatmaps, average-day)
                field: z.string().optional(), // surface-heatmap: which series, e.g. 'roof'
                surfaces: z.array(z.object({ field: z.string(), label: z.string() })).optional(), // average-day
                spots: z
                  .array(
                    z.object({
                      label: z.string(),
                      shapes: z.array(z.array(z.tuple([z.number(), z.number()]))), // polygons, % of the image
                      body: z.string(),
                      model: z.string().optional(), // how the element was modelled, when it matters
                    })
                  )
                  .optional(), // hotspots
              })
              .optional(),
          })
        ),
        method: z.array(z.string()).optional(),
        credits: z.string().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    hidden: z.boolean().default(false), // temporarily pull a project from the site

    order: z.number().optional(),
  }),
});

// ============================================================
// blog collection, journal posts
// files live under <locale>/<slug>.md (e.g. en/why-we-simulate-first.md)
// ============================================================
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'es']),
    eyebrow: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string().default('josé barría'),
    heroImage: z.string().optional(),
    // info band, mirrors the project meta band
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
