// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { lastmodForPath } from './src/lib/lastmod.mjs';
import { readdirSync, readFileSync } from 'node:fs';

// design-only projects (no `study` block) stay live but leave the sitemap and
// carry noindex (rev 2 pivot, 2026-11-23). simulation studies stay indexed.
const designOnly = readdirSync('./src/content/projects/en')
  .filter((f) => f.endsWith('.md') && !/^study:/m.test(readFileSync(`./src/content/projects/en/${f}`, 'utf8')))
  .map((f) => `/en/projects/${f.replace(/\.md$/, '')}/`);

// https://astro.build/config
export default defineConfig({
  site: 'https://entropica-lab.com',
  // 'always' because github pages serves every page as /path/ and 301s /path to it.
  // with 'never', canonical, og:url and the sitemap all pointed at a redirect, and
  // linkedin's post inspector failed on the loop (fixed 2026-11-22).
  trailingSlash: 'always',
  redirects: {
    // rev 2 pivot (2026-11-23): the site is english-only and the front door is /en/.
    // every spanish url that was ever live redirects to its english counterpart.
    // the spanish page files are kept in archive/es-pages/ and at git tag
    // archive/spanish-site-2026-11-23. nothing was deleted.
    '/': '/en/',
    '/en/services': '/en/',
    '/services': '/en/',
    '/about': '/en/about/',
    '/contact': '/en/contact/',
    '/faq': '/en/faq/',
    '/privacy': '/en/privacy/',
    '/projects': '/en/projects/',
    '/blog': '/en/blog/',
    // spanish project and blog urls (the list of pages the spanish routes built)
    '/projects/atlantic-research': '/en/projects/atlantic-research/',
    '/projects/casa-castillo': '/en/projects/casa-castillo/',
    '/projects/casa-ih': '/en/projects/casa-ih/',
    '/projects/casa-tn': '/en/projects/casa-tn/',
    '/projects/current-technologies': '/en/projects/current-technologies/',
    '/projects/eurostone-showroom': '/en/projects/eurostone-showroom/',
    '/projects/l12-ocean-reef': '/en/projects/l12-ocean-reef/',
    '/projects/l34': '/en/projects/l34/',
    '/projects/las-lajas-cabins': '/en/projects/las-lajas-cabins/',
    '/projects/las-vaquitas-offices': '/en/projects/las-vaquitas-offices/',
    '/projects/lotus-hall': '/en/projects/lotus-hall/',
    '/projects/manzil-basit': '/en/projects/manzil-basit/',
    '/projects/ministerio-publico': '/en/projects/ministerio-publico/',
    '/projects/new-chautauqua-institute': '/en/projects/new-chautauqua-institute/',
    '/projects/pacific-research': '/en/projects/pacific-research/',
    '/projects/private-bank-offices': '/en/projects/private-bank-offices/',
    '/blog/aec-o2-creditos-de-carbono': '/en/blog/aec-o2-creditos-de-carbono/',
    '/blog/arctic-data-centers': '/en/blog/arctic-data-centers/',
    '/blog/aulas-bioclimaticas-unp': '/en/blog/aulas-bioclimaticas-unp/',
    '/blog/glass-delusion': '/en/blog/glass-delusion/',
    '/blog/linz-self-sufficient-village': '/en/blog/linz-self-sufficient-village/',
    '/blog/living-facade-elements': '/en/blog/living-facade-elements/',
    '/blog/sustainable-architecture-panama': '/en/blog/sustainable-architecture-panama/',
    '/blog/water-in-a-drying-earth': '/en/blog/water-in-a-drying-earth/',
    '/blog/why-the-model-comes-first': '/en/blog/why-the-model-comes-first/',
    // wix-era urls that are still in google's index and 404 today (confirmed in the
    // 2026-07-15 search console export). github pages cannot issue real 301s, so a
    // static build emits a meta-refresh + canonical page here; google follows those.
    // deliberately NOT redirected:
    //   /projects/casa-lo            → "casa los oliu", withdrawn, let it 404
    //   /project-dafts/retainer-model → internal draft that leaked, let it 404
    '/resources': '/en/blog/',
    '/resources/arctic-data-centers': '/en/blog/arctic-data-centers/',
    // no los-cerros post was ever migrated, so send it to the index
    '/resources/los-cerros': '/en/blog/',
    '/living-facade-elements': '/en/blog/living-facade-elements/',
    '/projects/ministerio-pblico': '/en/projects/ministerio-publico/',
    // the manufacturer page was renamed; outbound emails may carry the old link
    '/en/manufacturers': '/en/specification-studies/',
  },
  integrations: [
    mdx(),
    sitemap({
      // on hold until launch: keep the specification studies page out of the sitemap
      // english only (rev 2, B4). the panamá tools stay live but are noindex and out.
      filter: (page) =>
        new URL(page).pathname.startsWith('/en/') &&
        !page.includes('/en/specification-studies') &&
        !page.includes('/en/modeling-support/') &&
        !page.includes('/en/manufacturers') &&
        !page.includes('/tools/cost-calculator') &&
        !page.includes('/recursos/permisos-panama') &&
        !page.includes('/en/architecture/') &&
        !designOnly.includes(new URL(page).pathname),
      // stamp each url with its source file's last git-commit date
      serialize(item) {
        try {
          const { pathname } = new URL(item.url);
          item.lastmod = lastmodForPath(pathname).toISOString();
        } catch {
          /* leave lastmod unset on failure */
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
