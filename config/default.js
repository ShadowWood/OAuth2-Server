'use strict';

const path = require('path');
const pkg = require('../package.json');

module.exports = {
  web: {
    url: 'http://127.0.0.1:7000',
    host: '127.0.0.1',
    port: 7000,
    name: pkg.name
  },
  view: {
    cache: {},
    engine: 'ejs',
    dir: 'views'
  },
  log: {
    dir: '/raid/oauth2-server/log/',
    nolog: /\.(js|css|png|jpg|jpeg|ico|svg|git)/,
    format: ':remote-addr :method :url :status :response-time ms :user-agent :content-length',
    replaceConsole: true,
    level: 'AUTO',
    console: false
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    opt: {auth_pass: ''},
    db: 9
  },
  redisSession: {
    host: '127.0.0.1',
    port: 6379,
    db: 1,
    pass: ''
  }
}