function person(nameValue, idValue, salaryValue) {
    this.name = nameValue
    this.id = idValue
    this.salary = salaryValue
    // this.print = function () {
    //     return this.name + ' ' + this.id + ' ' + this.salary
    // }
}

person.prototype.print = function () {
    return this.name + ' ' + this.id + ' ' + this.salary
}
console.log(Object.prototype)

const anilObject = new person('anil', 1, 1000)
console.log(anilObject.print())

console.log(anilObject.hasOwnProperty('print'))
console.log(person.prototype.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))