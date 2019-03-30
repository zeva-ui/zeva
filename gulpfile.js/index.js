// Utilities
const { series } = require('./utilities/api');

// Private tasks
const { optimizeCode } = require('./tasks/codeOptimizer');
const { buildFiles } = require('./tasks/builder');
const { cleanDist } = require('./tasks/folderCleaner');

// Public tasks
exports.release = series(cleanDist, buildFiles, optimizeCode);;
