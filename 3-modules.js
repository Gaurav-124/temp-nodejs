//commonjs, every file is module (by default)
//modules - encapsulated code (only share minimum)

const {peter,tom} = require('./4-names');   //destructuring it {peter,tom}
// console.log(names);

const sayhi = require('./5-utils');
// console.log(sayhi);
const data = require('./6-alternative')
// console.log(data);
require('./7-mind')

// sayhi('harry') 
// sayhi(peter)  
// sayhi(tom) 