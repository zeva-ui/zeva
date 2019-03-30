// Utilities
const { series } = require('../utilities/api');

// Dependency tasks
const { cleanDist } = require('./folderCleaner');
const { generateCode } = require('./codeGenerator');

const buildFiles = series(
                    cleanDist, 
                    generateCode
                );

module.exports = {
    buildFiles
}