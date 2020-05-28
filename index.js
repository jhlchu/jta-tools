const { readdirSync } = require('fs');
const path = require('path');
//.resolve(__dirname, file)

const ignore = ['.git', 'node_modules'];

const folders = readdirSync(__dirname, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log('ignored folders', folders.filter(folder => !ignore.contains(folder)));

console.log('project-id', $PROJECT_ID);
