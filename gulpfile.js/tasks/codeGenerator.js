// Utilities
const { parallel } = require('../utilities/api');

// Dependency tasks
const { compileSass } = require('./sassCompiler');

// Alias
const generateCode = parallel(compileSass);

module.exports = {
    generateCode
}