export class Employee {
    constructor(name, id, basic, da, hra) {
        this.empName = name
        this.empId = id
        this.empDaPay = da
        this.empHraPay = hra
        this.empBasicPay = basic
        this.totalSalary = 0
    }
    calculateSalary() {
        this.totalSalary = this.empBasicPay + this.empDaPay + this.empHraPay
    }
}
// module.exports = {
//     Employee
// }