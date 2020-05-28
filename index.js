const { readdirSync } = require('fs')

console.log('current dir', __dirname);

const folders = readdirSync(__dirname, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)


console.log('folders', folders);
