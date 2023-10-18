const os = require('os')  //build in  module

//os have so many propeties ans methods

//info about current user
const user = os.userInfo()
// console.log(user)

//method returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS); 