const id = "example-draft-post.md";
						const collection = "blog";
						const slug = "example-draft-post";
						const body = "\nUsers cannot see this post because it is in draft.\n\n## Motivation\n\nrec 1\n";
						const data = {author:"Sat Naing",pubDatetime:new Date(1654488391000),title:"Example Draft Post",featured:false,draft:true,tags:["TypeScript","Astro"],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est"};
						const _internal = {
							type: 'content',
							filePath: "/home/namnp/Documents/source/kun-site/src/content/blog/example-draft-post.md",
							rawData: "\ntitle: Example Draft Post\nauthor: Sat Naing\npubDatetime: 2022-06-06T04:06:31Z\nslug: example-draft-post\nfeatured: false\ndraft: true\ntags:\n  - TypeScript\n  - Astro\ndescription:\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n  incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel\n  fringilla est",
						};

export { _internal, body, collection, data, id, slug };
