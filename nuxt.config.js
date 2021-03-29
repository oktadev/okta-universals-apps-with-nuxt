import pkg from './package'
require('dotenv').config()

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Berkshire+Swash|Roboto' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth:{
    strategies:{
      okta:{
        scheme: 'oauth2',
        endpoints: {
          authorization: process.env.OAUTH_ISSUER+"/v1/authorize",
          token: process.env.OAUTH_ISSUER+"/v1/token",
          userInfo: process.env.OAUTH_ISSUER+"/v1/userinfo",
          logout: process.env.OAUTH_ISSUER+"/v1/logout"
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        /*refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },*/
        responseType: 'code',
        grantType: 'authorization_code',
        //accessType: 'offline', //needed for refresh tokens
        clientId: process.env.CLIENT_ID,
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',//Triggers use of PKCE
        }
    },
    redirect: {
      login: '/login',
      callback: '/auth',
      home: '/'
    },
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
