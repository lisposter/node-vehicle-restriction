'use strict';

const base = require('./lib/base');
const hangzhou = require('./lib/hangzhou');

module.exports = {
  normalize: base.normalize
};

exports.hangzhou = exports.hz = hangzhou;
