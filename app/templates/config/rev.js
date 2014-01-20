'use strict';
// Renames files for browser caching purposes
module.exports = {
    dist: {
        files: {
            src: [
                '<%%= settings.dist %>/scripts/{,*/}*.js',
                '<%%= settings.dist %>/styles/{,*/}*.css',
                '<%%= settings.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                '<%%= settings.dist %>/styles/fonts/{,*/}*.*'
            ]
        }
    }
};