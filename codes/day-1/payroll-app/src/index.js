// const { EmployeeManager } = require('./manager/employeeManager')
//const Hr = require('./models/hr')
//const { Developer } = require('./models/developer')
import { EmployeeManager } from './manager/employeeManager'
import Hr from './models/hr'
import { Developer } from './models/developer'

const manager = new EmployeeManager()
manager.add(new Hr('anil', 1, 1000, 2000, 3000, 4000))
manager.add(new Developer('sunil', 2, 2000, 3000, 4000, 5000))
manager.add(new Hr('ajit', 3, 3000, 4000, 5000, 6000))
manager.add(new Developer('mukesh', 4, 4000, 5000, 6000, 7000))

const result = manager.filterEmployees(14000)
manager.printEmployees(result)
