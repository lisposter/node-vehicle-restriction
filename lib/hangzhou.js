'use strict';

const base = require('./base');

module.exports = exports.hangzhou = exports.hz = hangzhou;

const rules = {
  0: 5,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 4,
  7: 3,
  8: 2,
  9: 1
};

function hangzhou(plate, day) {
  plate = base.normalize(plate);

  if (!/^浙A/.test(plate)) {
    throw new Error('This plate is not belongs to Hangzhou');
  }

  var lastNo = plate.replace(/\D/g, '').slice(-1);

  if (!day) {
    return rules[lastNo];
  }

  return rules[lastNo] === Number(day);
}
