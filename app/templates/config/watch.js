'use strict';
// Watches files for changes and runs tasks based on the changed files
module.exports = {<% if (coffee) { %>
    coffee: {
        files: ['<%%= settings.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:dist']
    },
    coffeeTest: {
        files: ['test/spec/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:test', 'test:watch']
    },<% } else { %>
    js: {
        files: ['<%%= settings.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true
        }
    },
    jstest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['test:watch']
    },<% } %>
    gruntfile: {
        files: ['Gruntfile.js']
    },<% if (includeCompass) { %>
    compass: {
        files: ['<%%= settings.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
    },<% } %>
    styles: {
        files: ['<%%= settings.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
    },
    livereload: {
        options: {
            livereload: '<%%= connect.options.livereload %>'
        },
        files: [
            '<%%= settings.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',<% if (coffee) { %>
            '.tmp/scripts/{,*/}*.js',<% } %>
            '<%%= settings.app %>/images/{,*/}*'
        ]
    }
};