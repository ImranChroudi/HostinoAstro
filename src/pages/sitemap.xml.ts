// src/pages/sitemap.xml.ts
export const prerender = true; // ← هذا مهم جداً!

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const baseUrl = 'https://www.hostino.ma';
  
  // زيد كل الصفحات هنا يدوياً أو استعمل integration
  const pages = [
    { route: '/', priority: 1, changefreq: 'daily' },
    { route: '/agence-seo-maroc', priority: 1, changefreq: 'weekly' },
    { route: '/nom-de-domaine-ma', priority: 1.0, changefreq: 'weekly' },
    { route: '/email-professionnel', priority: 1.0, changefreq: 'weekly' },
    { route: '/google-my-business-maroc', priority: 1.0, changefreq: 'weekly' },
    { route: '/google-ads-maroc', priority: 1.0, changefreq: 'weekly' },
    { route: '/creation-site-web-maroc', priority: 1.0, changefreq: 'weekly' },
    { route: '/contact', priority: 0.1, changefreq: 'monthly' },
    { route: '/mentions-legales', priority: 0.1, changefreq: 'monthly' },
    { route: '/politique-de-confidentialite', priority: 0.1, changefreq: 'monthly' },
    { route: '/conditions-generales', priority: 0.1, changefreq: 'monthly' },
    { route: '/politique-cookies', priority: 0.1, changefreq: 'monthly' },
    { route: '/abus', priority: 0.1, changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ route, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};