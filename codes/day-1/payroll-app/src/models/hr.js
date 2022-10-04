// const { Employee } = require('./employee')
import { Employee } from './employee'

class Hr extends Employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.empGratuityPay = gratuity
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.empGratuityPay
    }
}

//module.exports = Hr
export default Hr