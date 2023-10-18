//fs.readFileSync(): Synchronously reads the contents of a file.
const {readFileSync, writeFileSync } = require('fs')  //fs is file system module
// console.log('start')
const first =readFileSync('./content/subfolder/first.txt','utf8')
const second =readFileSync('./content/subfolder/second.txt','utf8')
console.log(first,second);

writeFileSync(
    './content/subfolder/result-sync.txt',
    `here is the result : ${first}, ${second}`
)
console.log('done with this task')
console.log('starting the next one')