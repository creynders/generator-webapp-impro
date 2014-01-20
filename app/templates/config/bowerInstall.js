'use strict';
// Automatically inject Bower components into the HTML file
module.exports = {
  app: {
      src: ['<%%= yeoman.app %>/index.html'],
      ignorePath: '<%%= yeoman.app %>/'<% if (includeCompass) { %>,
      exclude: ['<%%= yeoman.app %>/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js']
  },
  sass: {
      src: ['<%%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
      ignorePath: '<%%= yeoman.app %>/bower_components/'
  }<% } else { %>
  }<% } %>
};