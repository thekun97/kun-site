import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_wYgVWBG9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"author":"Nam","pubDatetime":"2022-09-23T15:22:00.000Z","modDatetime":"2023-12-21T09:12:47.400Z","title":"Microtech - Software Engineer","slug":"1-2","featured":true,"draft":false,"tags":["docs"],"description":"● Design, develop and maintain the smart home features.\n● Integrate IoT devices into the backend (google speakers, partner’s smart device,…).\n● 100% unittest coverage (TDD style).\n● Apply load testing for important APIs and user scenarios (Locust).\n● Assisting in the development of CI/CD workflows.\n● Management and deployment of cloud resources within the AWS.\n● Error Tracking & System monitor (Sentry, Datadog).\n● Optimize APIs, database queries, functions, redis,...\n● Break down the tasks for juniors.\n● Training interns and freshers.\n--- Django, ReactJs, Redis, PostgreSQL, AWS ---"};
				const file = "/home/namnp/Documents/source/kun-site/src/content/experience/eoh.md";
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
