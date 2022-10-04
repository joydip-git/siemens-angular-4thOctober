import { Employee } from "./employee";

export class Developer extends Employee {

    constructor(name: string, id: number, basic: number, da: number, hra: number, public empIncentivePay: number) {
        super(name, id, basic, da, hra)
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.empIncentivePay
    }
}