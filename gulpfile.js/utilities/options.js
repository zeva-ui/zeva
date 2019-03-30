// Plugins
const { autoprefixer, cssnano } = require('../plugins/postcss');

const options = {
    postcssPlugins: [
        cssnano(),
        autoprefixer()
    ]
}

module.exports = {
    options
}