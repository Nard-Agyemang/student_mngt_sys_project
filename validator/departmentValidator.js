const Department = require("../models/Department");

const departmentValidator = {
    DepartmentID: {
        notEmpty: {
            bail:true,
            errorMessage:'DepartmentID not supplied'            
        }
    },

    DepartmentName: {
        notEmpty: {
            bail:true,
            errorMessage:'Department Name not supplied'
        }
    },

    DateOpened: {
        notEmpty: {
            bail:true,
            errorMessage:'Date Opened not supplied'
        }
    }
}


module.exports = departmentValidator;