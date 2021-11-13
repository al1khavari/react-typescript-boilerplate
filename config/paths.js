const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
   appPath: resolveApp('.'),
   appBuild: resolveApp('build'),
   appPublic: resolveApp('public'),
   appPackageJson: resolveApp('package.json'),
   appSrc: resolveApp('src'),
   appNodeModules: resolveApp('node_modules'),
};