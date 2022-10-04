class Hr extends Employee {
    constructor(name: string, id: number, basic: number, da: number, hra: number, public empGratuityPay: number) {
        super(name, id, basic, da, hra)
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.empGratuityPay
    }
}