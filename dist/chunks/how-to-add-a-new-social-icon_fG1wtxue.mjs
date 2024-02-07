const id = "how-to-add-a-new-social-icon.md";
						const collection = "blog";
						const slug = "how-to-add-a-new-social-icon";
						const body = "\nHot new platform? Niche corner of the internet? Or one specific to your area? This post will guide you through how to add a new social icon to the theme.\n\n## Table of contents\n\n## Merging back to the theme\n\nThe maintainer of the theme [Sat Naing](https://github.com/satnaing) has said that he intends to only\n\n> keep the project supporting only a specific set of popular social icons.\n\nSo there is a chance that your icon will not be in the repo, but fear not, it is very easy to add your own!\n\n## Getting things to match\n\nThe icon set used by the theme come from [Tabler](https://tabler.io/icons) and there are a quite a few brands on there.\n\n## Adding your icon, by example\n\nFor this guide we are going to use the StackOverflow icon as our example.\n\n### Find the icon\n\n> In this case, we are going to use the `StackOverflow` as an example.\n\nSearching on Tabler for 'StackOverflow' we get a single icon <https://tabler.io/icons/icon/brand-stackoverflow>, we are going to need the svg code, so save it for later.\n\n```html\n<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  class=\"icon icon-tabler icon-tabler-brand-stackoverflow\"\n  width=\"24\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  stroke-width=\"2\"\n  stroke=\"currentColor\"\n  fill=\"none\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n  <path d=\"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1\" />\n  <path d=\"M8 16h8\" />\n  <path d=\"M8.322 12.582l7.956 .836\" />\n  <path d=\"M8.787 9.168l7.826 1.664\" />\n  <path d=\"M10.096 5.764l7.608 2.472\" />\n</svg>\n```\n\n### Clean up\n\nWe need to do some tidy up on what the theme provides us.\n\n1. remove all classes other than `icon-tabler`\n2. remove width & height\n3. remove the viewBox\n4. remove the stroke-width\n5. remove the stroke\n6. remove the fill\n\nThis should leave you with the following\n\n```html\n<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  class=\"icon-tabler\n  stroke-linecap=\"round\" stroke-linejoin=\"round\"\n>\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n  <path d=\"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1\" />\n  <path d=\"M8 16h8\" />\n  <path d=\"M8.322 12.582l7.956 .836\" />\n  <path d=\"M8.787 9.168l7.826 1.664\" />\n  <path d=\"M10.096 5.764l7.608 2.472\" />\n</svg>\n```\n\nNow we can add the clean svg code to the `src/assets/socialIcons.ts` file in `SocialIcons`.\n\n```typescript\nconst socialIcons = {\n  /* others */\n  StackOverflow: `<svg\n       xmlns=\"http://www.w3.org/2000/svg\"\n       class=\"icon-tabler\n       stroke-linecap=\"round\" stroke-linejoin=\"round\"\n     >\n       <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n       <path d=\"M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1\" />\n       <path d=\"M8 16h8\" />\n       <path d=\"M8.322 12.582l7.956 .836\" />\n       <path d=\"M8.787 9.168l7.826 1.664\" />\n       <path d=\"M10.096 5.764l7.608 2.472\" />\n     </svg>`,\n};\n```\n\nFinally we can configure it for our blog in `src/config.ts` under `SOCIALS`. Setting `active: true` to add it to the site.\n\n```typescript\nexport const SOCIALS: SocialObjects = [\n  /* others */\n  {\n    name: \"StackOverflow\",\n    href: \"https://stackoverflow.com/search?q=astropaper\",\n    linkTitle: `See what questions there are about ${SITE.title} on StackOverflow`,\n    active: true,\n  },\n];\n```\n\n> Ensure that `href` and `linkTitle` are updated for the corresponding link and label.\n\nFull code for the above steps can be found in [this pull request](https://github.com/satnaing/astro-paper/pull/216/files)\n";
						const data = {author:"Simon Smale",pubDatetime:new Date(1704737760000),modDatetime:null,title:"How to add a new Social Icon to AstroPaper",featured:false,draft:false,tags:["FAQ"],description:"How to add a new social icon to AstroPaper"};
						const _internal = {
							type: 'content',
							filePath: "/home/namnp/Documents/source/kun-site/src/content/blog/how-to-add-a-new-social-icon.md",
							rawData: "\nauthor: Simon Smale\npubDatetime: 2024-01-08T18:16:00.000Z\nmodDatetime:\ntitle: How to add a new Social Icon to AstroPaper\nfeatured: false\ndraft: false\ntags:\n  - FAQ\ndescription: How to add a new social icon to AstroPaper",
						};

export { _internal, body, collection, data, id, slug };
