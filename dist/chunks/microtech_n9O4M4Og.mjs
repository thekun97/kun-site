import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_wYgVWBG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"author":"Nam","pubDatetime":"2022-09-23T15:22:00.000Z","modDatetime":"2023-12-21T09:12:47.400Z","title":"Microtech - Software Engineer","slug":"1-1","featured":true,"draft":false,"tags":["docs"],"description":"● Scraping data from the internet to storing it in mongodb. (~2 million records)\n● Cleansing data and load to PostgreSQL\n● Building app will predict the price of product."};
				const file = "/home/namnp/Documents/source/kun-site/src/content/experience/microtech.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
