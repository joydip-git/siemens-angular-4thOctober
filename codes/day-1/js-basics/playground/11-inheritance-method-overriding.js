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
class Trainer extends Person {
    constructor(nameValue, idValue, salaryValue, subjectValue) {
        super(nameValue, idValue, salaryValue)
        this.subject = subjectValue
    }
    print() {
        let partial = super.print()
        return partial + ' ' + this.subject
    }
}
const anilTrainer = new Trainer('anil', 1, 1000, 'JavaScript')
console.log(anilTrainer.print())