import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as renderSlot, u as unescapeHTML } from '../astro_wYgVWBG9.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE, c as $$Layout, a as $$Header, b as $$Footer } from './404_9hslXw4w.mjs';
import { $ as $$Breadcrumbs } from './_page__H_cpLKb6.mjs';

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-6xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/namnp/Documents/source/kun-site/src/layouts/AboutLayout.astro", void 0);

const html = "<p>AstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on <a href=\"https://satnaing.dev/blog\">my personal blog</a>.</p>\n<p>This theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.</p>\n<p>This theme is self-documented _ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.</p>\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>This theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.</p>\n<h2 id=\"features\">Features</h2>\n<p>Here are certain features of this site.</p>\n<ul>\n<li>fully responsive and accessible</li>\n<li>SEO-friendly</li>\n<li>light &#x26; dark mode</li>\n<li>fuzzy search</li>\n<li>super fast performance</li>\n<li>draft posts</li>\n<li>pagination</li>\n<li>sitemap &#x26; rss feed</li>\n<li>highly customizable</li>\n</ul>\n<p>If you like this theme, you can star/contribute to the <a href=\"https://github.com/satnaing/astro-paper\">repo</a>.<br>\nOr you can even give any feedback via my <a href=\"mailto:contact@satnaing.dev\">email</a>.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/home/namnp/Documents/source/kun-site/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\nAstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on [my personal blog](https://satnaing.dev/blog).\n\nThis theme is aimed to be accessible out of the box. Light and dark mode are supported by\ndefault and additional color schemes can also be configured.\n\nThis theme is self-documented \\_ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.\n\n<div>\n  <img src=\"/assets/dev.svg\" class=\"sm:w-1/2 mx-auto\" alt=\"coding dev illustration\">\n</div>\n\n## Tech Stack\n\nThis theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.\n\n## Features\n\nHere are certain features of this site.\n\n- fully responsive and accessible\n- SEO-friendly\n- light & dark mode\n- fuzzy search\n- super fast performance\n- draft posts\n- pagination\n- sitemap & rss feed\n- highly customizable\n\nIf you like this theme, you can star/contribute to the [repo](https://github.com/satnaing/astro-paper).  \nOr you can even give any feedback via my [email](mailto:contact@satnaing.dev).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tech-stack","text":"Tech Stack"},{"depth":2,"slug":"features","text":"Features"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
