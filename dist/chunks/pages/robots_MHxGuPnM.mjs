import { S as SITE } from './404_9hslXw4w.mjs';

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();
const GET = () => new Response(robots, {
  headers: { "Content-Type": "text/plain" }
});

export { GET };
