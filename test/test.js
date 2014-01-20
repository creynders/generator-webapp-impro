/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('Webapp generator test', function () {
  var base = [
    'Gruntfile.js',
    'config/autoprefixer.js',
    'config/bowerInstall.js',
    'config/clean.js',
    'config/compass.js',
    'config/concurrent.js',
    'config/connect.js',
    'config/copy.js',
    'config/htmlmin.js',
    'config/jshint.js',
    'config/mocha.js',
    'config/rev.js',
    'config/svgmin.js',
    'config/usemin.js',
    'config/useminPrepare.js',
    'config/watch.js',
    'app/404.html',
    'app/favicon.ico',
    'app/robots.txt',
    'app/index.html',
    'app/styles/main.scss'
  ];
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.webapp = helpers.createGenerator('webapp:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      this.webapp.options['skip-install'] = true;

      done();
    }.bind(this));
  });

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
      'config/coffee.js',
      'app/scripts/main.coffee',
    ].concat(base);

    var notExpected = [
      'configjasmine.js',
      'configmodernizr.js'
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.coffee = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });

  it('creates expected files in non-AMD non-coffee mode', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
    ].concat(base);
    var notExpected = [
      'app/scripts/main.coffee',
      'config/coffee.js',
      'config/jasmine.js',
      'config/modernizr.js'
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.coffee = false;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });

  it('creates expected files in AMD mode', function (done) {
    var expected = [
      ['bower.json', /"name": "temp"/],
      ['package.json', /"name": "temp"/],
    ].concat(base);
    var notExpected = [
      'app/scripts/main.coffee',
      'config/coffee.js',
      'config/jasmine.js',
      'config/modernizr.js'
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeCompass']
    });

    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      helpers.assertNoFile(notExpected);
      done();
    });
  });
});
