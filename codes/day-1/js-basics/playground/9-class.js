class Person {
    constructor(nameValue, idValue, salaryValue) {
        this.name = nameValue
        this.id = idValue
        this.salary = salaryValue
    }
    print() {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(Person.prototype)
const anilObject = new Person('anil', 1, 1000)
console.log(anilObject)
//console.log(anilObject.print())

// console.log(anilObject.hasOwnProperty('print'))
// console.log(person.prototype.hasOwnProperty('print'))