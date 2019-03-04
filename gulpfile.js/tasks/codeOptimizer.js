// Utilities
const { src, dest, parallel } = require('../utilities/api');
const { options } = require('../utilities/options');

// Plugins
const { sourcemaps, rename } = require('../plugins/plugins.manifest');
const { postcss } = require('../plugins/postcss');

// Secondary tasks
function optimizeCSS() {
  return src('./dist/css/*.css')
          .pipe(sourcemaps.init())
          .pipe(rename({
            suffix: ".min",
            extname: ".css"
          }))
          .pipe(postcss(options.postcssPlugins))
          .pipe(sourcemaps.write('./'))
          .pipe(dest('./dist/css'));
}

// Main task
const optimizeCode = parallel(optimizeCSS);

module.exports = {
  optimizeCode
};