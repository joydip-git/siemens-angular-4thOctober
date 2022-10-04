import employees from "../data/repository"
import { Employee } from "../models/employee"

export class EmployeeManager {
    add(emp: Employee): boolean {
        const found = employees.find(
            function (e) {
                return e.empId === emp.empId
            }
        )
        if (!found) {
            employees.push(emp)
            return true
        }
        return false
    }

    filterEmployees(criteria: number): Employee[] {
        const filteredEmployees = employees.filter(
            function (emp) {
                emp.calculateSalary()
                return emp.totalSalary > criteria
            }
        )
        return filteredEmployees
    }

    printEmployees(arrToPrint: Employee[]): void {
        arrToPrint.forEach(
            function (emp) {
                console.log(emp.empName + ' gets salary of ' + emp.totalSalary)
            }
        )
    }
}