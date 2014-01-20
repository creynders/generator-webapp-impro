'use strict';
// Generates a custom Modernizr build that includes only the tests you
// reference in your app
module.exports = {
    devFile: '<%%= settings.app %>/bower_components/modernizr/modernizr.js',
    outputFile: '<%%= yeoman.dist %>/scripts/vendor/modernizr.js',
    files: [
        '<%%= settings.dist %>/scripts/{,*/}*.js',
        '<%%= settings.dist %>/styles/{,*/}*.css',
        '!<%%= settings.dist %>/scripts/vendor/*'
    ],
    uglify: true
};