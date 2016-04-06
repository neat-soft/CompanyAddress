/**
 * Created by mirko on 13.2.16..
 */

'use strict';

// Production like configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://127.0.0.1/skywarrior'
  },

  port: 9191,

  paypal: {
    mode: 'sandbox', // sandbox or live
    host: 'api.sandbox.paypal.com',
    client_id: 'AeiwNsYHR-ASZG0TgrBxfZ_3-77jvOB4qlbOWkoilntL8mjcEuuFg6f7IkRwf1GTLNYnNTikopbFVexK',
    client_secret: 'ECiE5J_Ve8F95gCdQaLOiC9oEJnWvNPlnhYd1QIRtXdvYn6StvsLXC41DLiUdttvzFP4BTht2f-6AqY2'
  },

  scheduler: {
    mongo_url: 'mongodb://127.0.0.1/agenda'
  },

  // Redis cache connection options
  redis: {
    port: 6379,
    host: '127.0.0.1'
  },

  allowed_origins: [
    'http://dev.csgoskinsmarket.com:9191'
  ],

  hostname: 'http://dev.csgoskinsmarket.com:9191',

  manager_bot: {
    username: 'lazarevicBot', //'lazarevic86', //'lazarevicBot',//'vukojevicvojkan',
    password: 'lazarevic1986!' //Andr0meda1986!'//'lazarevic1986!' //'7032130vo'
  },

  available_bots: [
    {
      username: 'skywarriorbot7',
      password: 'SwSteamBot!72015'
    }
  ]

};
