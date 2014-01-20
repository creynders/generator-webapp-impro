'use strict';
// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js',
        '<%%= settings.app %>/scripts/{,*/}*.js',
        '!<%%= settings.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
    ]
};