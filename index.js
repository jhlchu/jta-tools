const { readdirSync } = require('fs');
const path = require('path');
//.resolve(__dirname, file)

const ignore = ['.git', 'node_modules'];

const folders = readdirSync(__dirname, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(dir => !ignore.contains(dir));

console.log('folders', folders');

console.log('project-id', $PROJECT_ID);
