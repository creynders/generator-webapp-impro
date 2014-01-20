'use strict';
// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
    options: {
        sassDir: '<%%= settings.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%%= settings.app %>/images',
        javascriptsDir: '<%%= settings.app %>/scripts',
        fontsDir: '<%%= settings.app %>/styles/fonts',
        importPath: '<%%= settings.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false
    },
    dist: {
        options: {
            generatedImagesDir: '<%%= settings.dist %>/images/generated'
        }
    },
    server: {
        options: {
            debugInfo: true
        }
    }
};