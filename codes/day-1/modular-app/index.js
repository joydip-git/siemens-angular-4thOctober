//const exportableObject = require('./utils')
//console.log(exportableObject)
// console.log(exportableObject.addFn(10, 20))
// console.log(exportableObject.subFn(10, 3))

// console.log(exportableObject.add(10, 20))
// console.log(exportableObject.subtract(10, 3))

const { add, subtract } = require('./utils')
console.log(add(10, 20))
console.log(subtract(10, 3))

//object de-structuring
const obj = {
    name: 'anil',
    salary: 1000
}

const { name, salary } = obj
console.log(name, salary)