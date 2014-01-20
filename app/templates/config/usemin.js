'use strict';
// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
    options: {
        assetsDirs: ['<%%= settings.dist %>']
    },
    html: ['<%%= settings.dist %>/{,*/}*.html'],
    css: ['<%%= settings.dist %>/styles/{,*/}*.css']
};