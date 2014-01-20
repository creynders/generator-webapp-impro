'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%%= settings.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%%= settings.dist %>/images'
        }]
    }
};