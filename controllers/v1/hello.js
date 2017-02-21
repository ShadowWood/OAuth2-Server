/**
 * @author ShadowWood
 * @email shadowwood@foxmail.com
 * @date 2017-02-21 16:09:39
 * @desc hello.js
*/

'use strict';

const BaseController = require('../../lib/baseController');

class Hello extends BaseController {
  constructor() {
    super();

    // add method in routes
    this.routesMaps['/:id'].post = this.otherMethod;

    // define other routes
    this.routesMaps['/:id/others'] = {
      'get': this.getOthers
    } 
  }

  list(req, res, next) {
    res.send(JSON.stringify(['hello1', 'hello2']));
  }

  create(req, res, next) {
    let newHello = req.body;
    res.send(newHello);
  }

  detail(req, res, next) {
    let helloId = req.params.id;
    res.send({id: helloId});
  }

  update(req, res, next) {
    let helloId = req.params.id;
    let updateHello = req.body;
    res.send(this._.extend({id: helloId}, updateHello));
  }

  delete(req, res, next) {
    let helloId = req.params.id;
    res.send('delete successfully');
  }

  getOthers(req, res, next) {
    res.send('get others');
  }

  otherMethod(req, res, next) {
    res.send('other method');
  }
}


module.exports = new Hello().initRoute();
