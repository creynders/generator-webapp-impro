'use strict';
// Empties folders to start fresh
module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%%= settings.dist %>/*',
                '!<%%= settings.dist %>/.git*'
            ]
        }]
    },
    server: '.tmp'
};