import { g as getCollection, s as slugifyStr } from './_page__H_cpLKb6.mjs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { S as SITE } from './404_9hslXw4w.mjs';

const postOgImage = (post) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "#fefbfb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-1px",
              right: "-1px",
              border: "4px solid #000",
              background: "#ecebeb",
              opacity: "0.9",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              margin: "2.5rem",
              width: "88%",
              height: "80%"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              border: "4px solid #000",
              background: "#fefbfb",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
              width: "88%",
              height: "80%"
            },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "20px",
                  width: "90%",
                  height: "90%"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      style: {
                        fontSize: 72,
                        fontWeight: "bold",
                        maxHeight: "84%",
                        overflow: "hidden"
                      },
                      children: post.data.title
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "8px",
                        fontSize: 28
                      },
                      children: [
                        /* @__PURE__ */ jsxs("span", { children: [
                          "by",
                          " ",
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              style: {
                                color: "transparent"
                              },
                              children: '"'
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { style: { overflow: "hidden", fontWeight: "bold" }, children: post.data.author })
                        ] }),
                        /* @__PURE__ */ jsx("span", { style: { overflow: "hidden", fontWeight: "bold" }, children: SITE.title })
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
};

const siteOgImage = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "#fefbfb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-1px",
              right: "-1px",
              border: "4px solid #000",
              background: "#ecebeb",
              opacity: "0.9",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              margin: "2.5rem",
              width: "88%",
              height: "80%"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              border: "4px solid #000",
              background: "#fefbfb",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
              width: "88%",
              height: "80%"
            },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "20px",
                  width: "90%",
                  height: "90%"
                },
                children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "90%",
                        maxHeight: "90%",
                        overflow: "hidden",
                        textAlign: "center"
                      },
                      children: [
                        /* @__PURE__ */ jsx("p", { style: { fontSize: 72, fontWeight: "bold" }, children: SITE.title }),
                        /* @__PURE__ */ jsx("p", { style: { fontSize: 28 }, children: SITE.desc })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                        marginBottom: "8px",
                        fontSize: 28
                      },
                      children: /* @__PURE__ */ jsx("span", { style: { overflow: "hidden", fontWeight: "bold" }, children: new URL(SITE.website).hostname })
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
};

const fetchFonts = async () => {
  const fontFileRegular = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf"
  );
  const fontRegular2 = await fontFileRegular.arrayBuffer();
  const fontFileBold = await fetch(
    "https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf"
  );
  const fontBold2 = await fontFileBold.arrayBuffer();
  return { fontRegular: fontRegular2, fontBold: fontBold2 };
};
const { fontRegular, fontBold } = await fetchFonts();
const options = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "IBM Plex Mono",
      data: fontRegular,
      weight: 400,
      style: "normal"
    },
    {
      name: "IBM Plex Mono",
      data: fontBold,
      weight: 600,
      style: "normal"
    }
  ]
};
function svgBufferToPngBuffer(svg) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}
async function generateOgImageForPost(post) {
  const svg = await satori(postOgImage(post), options);
  return svgBufferToPngBuffer(svg);
}
async function generateOgImageForSite() {
  const svg = await satori(siteOgImage(), options);
  return svgBufferToPngBuffer(svg);
}

async function getStaticPaths$3() {
  const posts = await getCollection("experience").then(
    (p) => p.filter(({ data }) => !data.draft && !data.ogImage)
  );
  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post
  }));
}
const GET$3 = async ({ props }) => new Response(
  await generateOgImageForPost(props),
  {
    headers: { "Content-Type": "image/png" }
  }
);

const index_png$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET: GET$3,
  getStaticPaths: getStaticPaths$3
}, Symbol.toStringTag, { value: 'Module' }));

async function getStaticPaths$2() {
  const posts = await getCollection("blog").then(
    (p) => p.filter(({ data }) => !data.draft && !data.ogImage)
  );
  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post
  }));
}
const GET$2 = async ({ props }) => new Response(await generateOgImageForPost(props), {
  headers: { "Content-Type": "image/png" }
});

const index_png$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET: GET$2,
  getStaticPaths: getStaticPaths$2
}, Symbol.toStringTag, { value: 'Module' }));

async function getStaticPaths$1() {
  const posts = await getCollection("projects").then(
    (p) => p.filter(({ data }) => !data.draft && !data.ogImage)
  );
  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post
  }));
}
const GET$1 = async ({ props }) => new Response(
  await generateOgImageForPost(props),
  {
    headers: { "Content-Type": "image/png" }
  }
);

const index_png$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET: GET$1,
  getStaticPaths: getStaticPaths$1
}, Symbol.toStringTag, { value: 'Module' }));

async function getStaticPaths() {
  const posts = await getCollection("experience").then(
    (p) => p.filter(({ data }) => !data.draft && !data.ogImage)
  );
  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post
  }));
}
const GET = async ({ props }) => new Response(
  await generateOgImageForPost(props),
  {
    headers: { "Content-Type": "image/png" }
  }
);

const index_png = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

export { index_png$2 as a, index_png$1 as b, index_png as c, generateOgImageForSite as g, index_png$3 as i };
