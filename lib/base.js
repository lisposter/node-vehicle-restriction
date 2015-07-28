'use strict';

module.exports = {
  normalize: normalize
};

function normalize(str) {
  return str.replace(/\s|·|\-|——|_/g, '');
}
