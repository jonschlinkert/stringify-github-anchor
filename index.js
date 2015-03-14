/*!
 * stringify-github-anchor <https://github.com/jonschlinkert/stringify-github-anchor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var url = require('stringify-github-url');
var isNumber = require('is-number');


module.exports = github;

function github(params) {
  params = params || {};

  if (typeof params.user !== 'string') {
    throw new TypeError('stringify-github-anchor expects `user` to be a string.');
  }

  if (typeof params.repo !== 'string') {
    throw new TypeError('stringify-github-anchor expects `repo` to be a string.');
  }

  params.branch = params.branch || 'master';
  var res = url(params.user, params.repo);
  res += '/blob/';
  res += params.branch;
  res += '/';
  res += params.file;
  res += params.line ? ('#L' + params.line) : '';
  return res;
}
