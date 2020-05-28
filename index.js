/*
const { readdirSync } = require('fs');
const path = require('path');
//.resolve(__dirname, file)

const ignore = ['.git', 'node_modules'];

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const base_url = process.argv[2];
const base_url_backup = process.argv[3];

const folders = readdirSync(__dirname, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(dir => !ignore.includes(dir));

console.log('folders', folders);
// If running individual builds on index.js in each folder
const { exec } = require('child_process');
exec('ls | grep js', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});
*/
