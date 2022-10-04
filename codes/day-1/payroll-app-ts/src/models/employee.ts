export class Employee {
    // empName: string;
    // empId: number;
    // empDaPay: number;
    // empHraPay: number;
    // empBasicPay: number;
    // totalSalary: number;

    // constructor(empName: string, empId: number, empBasicPay: number, empDaPay: number, empHraPay: number) {
    //     this.empName = empName
    //     this.empId = empId
    //     this.empDaPay = empDaPay
    //     this.empHraPay = empHraPay
    //     this.empBasicPay = empDaPay
    //     this.totalSalary = 0
    // }
    totalSalary: number;
    constructor(public empName: string, public empId: number, public empBasicPay: number, public empDaPay: number, public empHraPay: number) {
        this.totalSalary = 0
    }

    calculateSalary(): void {
        this.totalSalary = this.empBasicPay + this.empDaPay + this.empHraPay
    }
}