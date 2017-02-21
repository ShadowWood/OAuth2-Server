/**
 * @author ShadowWood
 * @email shadowwood@foxmail.com
 * @date 2017-02-20 20:12:39
 * @desc server.js
*/

'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const routes = require('express-mount-routes');
const logger = require('../utils/logger');

routes(router, path.join(__dirname, '../controllers/v1'), {urlPrefix: '/api/'});

module.exports = router;