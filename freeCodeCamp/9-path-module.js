const path = require('path')

console.log(path.sep);

//The path.join() method joins the specified path segments into one path.
const filePath = path.join('/content','/subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);