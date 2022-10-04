employees.push(
    new Hr('anil', 1, 1000, 2000, 3000, 4000),
    new Developer('sunil', 2, 2000, 3000, 4000, 5000),
    new Hr('ajit', 3, 3000, 4000, 5000, 6000),
    new Developer('mukesh', 4, 4000, 5000, 6000, 7000)
)

const filteredEmployees = employees.filter(
    function (emp) {
        emp.calculateSalary()
        return emp.totalSalary > 14000
    }
)

filteredEmployees.forEach(
    function (emp) {
        console.log(emp.empName + ' gets salary of ' + emp.totalSalary)
    }
)