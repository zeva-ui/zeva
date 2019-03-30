// Utilities
const { src, dest } = require('../utilities/api');

// Plugins
const { sass, sourcemaps } = require('../plugins/plugins.manifest');

// Main task
// Sass project compiling configuration
sass.compiler = require('node-sass');

function compileSass() {
  const sassResult = src('./src/scss/**/*.scss')
                        .pipe(sourcemaps.init())
                        .pipe(sass().on('error', sass.logError))
                        .pipe(sourcemaps.write('./'));

return sassResult
        .pipe(dest('./dist/css'));
}

module.exports = {
    compileSass
};