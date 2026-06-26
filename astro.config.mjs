import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// Scan blog frontmatter once at config load so the sitemap can drop draft
// slugs and stamp accurate <lastmod> dates without a separate data source.
function scanPosts() {
  const dir = fileURLToPath(new URL('./src/pages/posts', import.meta.url));
  /** @type {Record<string, { draft: boolean, lastmod?: string }>} */
  const meta = {};
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const fm = src.split('---')[1] ?? '';
    const draft = /\bdraft:\s*true\b/.test(fm);
    const dateMatch = fm.match(/\bpubDate:\s*['"]?([0-9T:.+Z-]+)/);
    const slug = file.replace(/\.md$/, '');
    meta[`/posts/${slug}/`] = {
      draft,
      lastmod: dateMatch ? new Date(dateMatch[1]).toISOString() : undefined,
    };
  }
  return meta;
}

const postMeta = scanPosts();

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://hewig.dev/', // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always', // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !postMeta[pathname]?.draft;
      },
      serialize(item) {
        const { pathname } = new URL(item.url);
        const meta = postMeta[pathname];
        if (meta?.lastmod) item.lastmod = meta.lastmod;

        if (pathname === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (pathname.startsWith('/posts/') && pathname !== '/posts/') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (pathname.startsWith('/projects/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
    robotsTxt(),
  ],
});
