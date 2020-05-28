const { sourceFileArray } = require("./contents/blog/json/summary.json");

const sourceFileNameToUrl = (filepath) => {
  const deleteExt = filepath.replace(".md", "");
  const fileName = deleteExt.split("/")[deleteExt.split("/").length - 1];
  const splitArray = fileName.split("-");
  return `/blog/${splitArray.slice(0, 3).join("-")}/${splitArray
    .slice(3)
    .join("-")}`;
};

const generateDynamicRoutes = (callback) => {
  const routes = sourceFileArray.map((sourceFileName) => {
    return sourceFileNameToUrl(sourceFileName.normalize());
  });
  callback(null, routes);
};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "samsepy",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "1995年8月30日生まれ、24歳。出身は石川で、現在は東京住まい。海外で暮らしたい。",
      },
      { name: "keywords", content: "Hajime Todo, samsepy, 東度, 東度基" },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://samsepy.work/`,
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "samsepy" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "1995年8月30日生まれ、24歳。出身は石川で、現在は東京住まい。海外で暮らしたい。",
      },
      { hid: "og:site_name", property: "og:site_name", content: "samsepy" },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://samsepy.work/icon.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-148741837-1",
      },
    ],
    "@nuxtjs/sitemap",
    "nuxt-fontawesome",
    "@nuxtjs/svg",
    "nuxt-webfontloader",
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            {
              buildTarget: isServer ? "server" : "client",
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://samsepy.work",
    generate: true,
    routes: generateDynamicRoutes,
  },
  generate: {
    routes: generateDynamicRoutes,
  },
  fontawesome: {
    component: "fa",
  },
  webfontloader: {
    google: {
      families: ["M+PLUS+Rounded+1c:wght@700&display=swap"],
    },
  },
};
