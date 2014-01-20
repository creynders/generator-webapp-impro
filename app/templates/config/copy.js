'use strict';
// Copies remaining files to places other tasks can use
module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%%= settings.app %>',
            dest: '<%%= settings.dist %>',
            src: [
                '*.{ico,png,txt}',
                '.htaccess',
                'images/{,*/}*.webp',
                '{,*/}*.html',
                'styles/fonts/{,*/}*.*'<% if (includeBootstrap) { %>,<% if (includeCompass) { %>
                'bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap/*.*'<% } else { %>
                'bower_components/bootstrap/dist/fonts/*.*'<% } %><% } %>
            ]
        }]
    },
    styles: {
        expand: true,
        dot: true,
        cwd: '<%%= settings.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
    }
};