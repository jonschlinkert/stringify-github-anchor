/*!
 * stringify-github-anchor <https://github.com/jonschlinkert/stringify-github-anchor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var githubAnchor = require('./');

describe('githubAnchor', function () {
  it('should generate a GitHub anchor URL:', function () {
    var actual = githubAnchor({
      user: 'jonschlinkert',
      repo: 'micromatch',
      file: 'index.js'
    });
    actual.should.equal('https://github.com/jonschlinkert/micromatch/blob/master/index.js');
  });

  it('should specify the branch:', function () {
    var actual = githubAnchor({
      user: 'jonschlinkert',
      repo: 'micromatch',
      file: 'index.js',
      branch: 'v1.0.0'
    });
    actual.should.equal('https://github.com/jonschlinkert/micromatch/blob/v1.0.0/index.js');
  });

  it('should specify the line number:', function () {
    var actual = githubAnchor({
      user: 'jonschlinkert',
      repo: 'micromatch',
      file: 'index.js',
      line: 25
    });
    actual.should.equal('https://github.com/jonschlinkert/micromatch/blob/master/index.js#L25');
  });

  it('should specify the line number and branch:', function () {
    var actual = githubAnchor({
      user: 'jonschlinkert',
      repo: 'micromatch',
      file: 'index.js',
      branch: 'v1.0.0',
      line: 25
    });
    actual.should.equal('https://github.com/jonschlinkert/micromatch/blob/v1.0.0/index.js#L25');
  });

  it('should throw an error on bad args:', function () {
    (function () {
      githubAnchor({
        repo: 'foo'
      });
    }).should.throw('stringify-github-anchor expects `user` to be a string.');

    (function () {
      githubAnchor({
        user: 'foo'
      });
    }).should.throw('stringify-github-anchor expects `repo` to be a string.');
  });
});
