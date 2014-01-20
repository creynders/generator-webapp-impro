'use strict';
// The actual grunt server settings
module.exports = {
    options: {
        port: 9000,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
    },
    livereload: {
        options: {
            open: true,
            base: [
                '.tmp',
                '<%%= settings.app %>'
            ]
        }
    },
    test: {
        options: {
            port: 9001,
            base: [
                '.tmp',
                'test',
                '<%%= settings.app %>'
            ]
        }
    },
    dist: {
        options: {
            open: true,
            base: '<%%= settings.dist %>',
            livereload: false
        }
    }
};