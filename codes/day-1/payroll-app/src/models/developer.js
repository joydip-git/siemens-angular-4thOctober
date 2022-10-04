//const { Employee } = require('./employee')
import { Employee } from "./employee"

export class Developer extends Employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.empIncentivePay = incentive
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.empIncentivePay
    }
}

// module.exports = {
//     Developer
// }