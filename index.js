const { readdirSync } = require('fs');
const path = require('path');
//.resolve(__dirname, file)

const ignore = ['.git', 'node_modules'];

const folders = readdirSync(__dirname, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(dir => !ignore.includes(dir));

console.log('folders', folders);

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

console.log('project-id', process.argv[2]);
