//2. constructor function syntax
function person(nameValue, idValue, salaryValue) {
    this.name = nameValue
    this.id = idValue
    this.salary = salaryValue
    let info
    this.print = function () {
        info = this.name + ' ' + this.id + ' ' + this.salary
        return info
    }
}

var anilObject = new person('anil', 1, 1000)
var sunilObject = new person('sunil', 2, 2000)

console.log(anilObject.name)
console.log(anilObject['salary'])
console.log(anilObject.print())

anilObject.location = 'Bangalore'
anilObject.sayHi = function () {
    console.log('Hi....')
}
console.log(anilObject)
anilObject.sayHi()

for (const propName in anilObject) {
    const propValue = anilObject[propName]
    console.log(propName + ':' + propValue)
}
