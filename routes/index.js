/**
 * @author ShadowWood
 * @email shadowwood@foxmail.com
 * @date 2017-02-20 20:12:39
 * @desc server.js
*/

'use strict';

const express = require('express');

const router = express.Router();

router.all('/', function(req, res, next) {
  return res.send('hello world!');
});

module.exports = router;