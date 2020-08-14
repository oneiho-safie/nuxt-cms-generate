const axios = require('axios')
const apiUrl = 'https://safie.link'

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.static', process.static)

module.exports = {
  mode: 'universal',
  target: 'static',
  generate: {
    interval: 1000,
    routes () {
      return Promise.all([
        axios.get(`${apiUrl}/wp-json/wp/v2/blog`),
        axios.get(`${apiUrl}/manual/wp-json/wp/v2/posts`),
      ]).then(response => {
        const blogPosts = response[0].data
        const manualPosts = response[1].data
        return blogPosts.map((post) => {
          return {
            route: '/blog/' + post.id,
            payload: post
          }
        }).concat(
          manualPosts.map((manualItem) => {
            return {
              route: '/manual/' + manualItem.id,
              payload: manualItem
            }
          })
        ).concat([
          {
            route: '/',
            payload: [blogPosts, manualPosts]
          }
        ])
      })
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Safie Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  srcDir: 'src/',

  /*
   ** Customize the progress-bar color
   */
  // loading: '#ff0000',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/bootstrap.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  router: {
    base: '',
    middleware: [],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    timeout: 200000,
    withCredentials: true,
    proxy: true
  },

  proxy: {
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  },
}
