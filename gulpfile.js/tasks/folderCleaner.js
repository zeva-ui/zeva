// Modules
const { del } = require('../modules/modules.manifest');

// Main tasks
function cleanDist() {
    return del(['./dist'])
}

module.exports = {
    cleanDist
}