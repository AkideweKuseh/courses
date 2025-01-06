// Imports using commonJS
const os = require('os');
const path = require('path')
// const math = require('./math')
// Destructuring functions
const { add, subtract, multiply, divide } = require('./math')

// without destructured functions
// console.log(math.add(1, 2))
// console.log(math.subtract(1, 2))
// console.log(math.multiply(2, 2))
// console.log(math.divide(4, 2))

// with destructured functions
console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(multiply(2, 2))
console.log(divide(290, 8))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// //get the current directory name 
// console.log(__dirname)

// //get the current file name
// console.log(__filename)

// console.log('-----------------------------------------')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log('-----------------------------------------')

// console.log(path.parse(__filename))