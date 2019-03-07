// Official Gulp plugins
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

const { postcss, autoprefixer, cssnano } = require('./postcss');

module.exports = {
    // Official
    sourcemaps,
    sass,
    rename,
    postcss,
    // Third party dependency plugins
        // PostCSS
        autoprefixer,
        cssnano
}