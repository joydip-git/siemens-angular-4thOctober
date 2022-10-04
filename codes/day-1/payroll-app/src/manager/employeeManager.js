class EmployeeManager {
    add(emp) {
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

    filterEmployees(criteria) {
        const filteredEmployees = employees.filter(
            function (emp) {
                emp.calculateSalary()
                return emp.totalSalary > criteria
            }
        )
        return filteredEmployees
    }

    printEmployees(arrToPrint) {
        arrToPrint.forEach(
            function (emp) {
                console.log(emp.empName + ' gets salary of ' + emp.totalSalary)
            }
        )
    }
}