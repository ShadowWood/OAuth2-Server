/**
 * @author ShadowWood
 * @email shadowwood@foxmail.com
 * @date 2017-02-21 16:09:39
 * @desc hello.js
*/

'use strict';

const _ = require('lodash');
const app = require('../server/web');

class BaseController {
  constructor() {
    this.routesMaps = {
      '/': {
        'get': this.list,
        'post': this.create
      },
      '/:id': {
        'get': this.detail,
        'put': this.update,
        'delete': this.delete
      }
    };

    this._ = _;
    this.app = app;
  }

  initRoute() {
    return this.routesMaps;
  }

  list(req, res, next) {
    // default end http404
    res.status(404).end()
  }

  create(req, res, next) {
    // default end http404
    res.status(404).end()
  }

  detail(req, res, next) {
    // default end http404
    res.status(404).end()
  }

  update(req, res, next) {
    // default end http404
    res.status(404).end()
  }

  delete(req, res, next) {
    // default end http404
    res.status(404).end()
  }
}

module.exports = BaseController;
