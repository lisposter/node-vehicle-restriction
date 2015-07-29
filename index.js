'use strict';

const base = require('./lib/base');
const hangzhou = require('./lib/hangzhou');

module.exports = {
  normalize: base.normalize
};

module.exports.hangzhou = module.exports.hz = hangzhou;
