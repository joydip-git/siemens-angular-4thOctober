//1. object-literal syntax
const anilObject = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
// console.log(anilObject.name)
// console.log(anilObject['salary'])
// console.log(anilObject.print())

anilObject.location = 'Bangalore'
anilObject.sayHi = function () {
    console.log('Hi....')
}
// console.log(anilObject)
// anilObject.sayHi()

for (const propName in anilObject) {
    const propValue = anilObject[propName]
    console.log(propName + ':' + propValue)
}
