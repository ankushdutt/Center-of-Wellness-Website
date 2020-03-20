var purify = require('purify-css')
var content = ['**/*.html'];
var css = ['assets/css/bulma.min.css'];

var options = {
  output: './assets/css/bulma.purified.css',

  // Will minify CSS code in addition to purify.
  minify: true,

  // Logs out removed selectors.
  rejected: true
};

purify(content, css, options);