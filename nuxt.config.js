export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "http://kbyt.benhvienkhuvucthuduc.vn/Health/assets/img/logo.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      },
      // {
      //   rel: "stylesheet",
      //   href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      // },
      {
        rel: "stylesheet",
        href: "/element/index.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      }
    ],
    script: [
      // { src: "/js/svg-injector.umd.production.js", body: true }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/style.css", "~/assets/styles/theme.scss"],
  styleResources: {
    scss: ["~/assets/styles/_user-variables.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/vue-placeholders.js",
    "~/plugins/vue-observe-visibility.client.js",
    "~/plugins/vue-element-ui.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/svg", "@nuxtjs/style-resources"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/pwa"
  ],
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "Users/login",
            method: "post",
            propertyName: "token.accessToken"
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: {
            url: "Users/MyProfile",
            method: "get",
            propertyName: ""
          }
          // tokenRequired: true,
          // globalToken: true,
        },
        tokenRequired: true,
        tokenName: "Authorization",
        tokenType: "Bearer",
        globalToken: true,
        autoFetchUser: true
      }
    }
  },
  router: {
    middleware: ["auth"]
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.API_URL || "http://myhealthdemo.benhvienkhuvucthuduc.vn/api/",
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
