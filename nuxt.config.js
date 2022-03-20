const currentAge = () => {
  const birthday = new Date(1995, 8 - 1, 30);
  const today = new Date();
  const thisYearBirthDay = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );
  const age = today.getFullYear() - birthday.getFullYear();
  return today < thisYearBirthDay ? age - 1 : age;
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
        content: `1995年8月30日生まれ、${currentAge()}歳。リモートでエンジニアをやっている。海外で暮らしたい。`,
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
        content: `1995年8月30日生まれ、${currentAge()}歳。リモートでエンジニアをやっている。海外で暮らしたい。`,
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
  plugins: ["@plugins/mixin"],
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
        const targets = isServer ? { node: "current" } : { ie: 11 };
        return [[require.resolve("@babel/preset-env"), { targets }]];
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator",
      ],
    },
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://samsepy.work",
  },
  fontawesome: {
    component: "fa",
  },
};
