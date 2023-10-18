
const path = require('path');

console.log(path.sep)

const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath)

const absolute = path.resolve('/content','subfolder','text.txt')
console.log(absolute)

 