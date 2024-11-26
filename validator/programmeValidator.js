const department = require("../models/Department");
const Programme = require("../models/Programme");
// Intellisence declare by default
// const { DepartmentID } = require("./departmentValidator");


const programmeValidator = {
    ProgrammeID: {
        notEmpty: {
            bail:true,
            errorMessage:'ProgrammeID not supplied'
        }
    },

    ProgrammeName: {
        notEmpty: {
            bail:true,
            errorMessage:'Programme Name not supplied'
        }
    },

    ProgrammeAmount: {
        notEmpty: {
            bail:true,
            errorMessage:'Programme Amount not supplied'
        }
    },

    DepartmentID: {
        notEmpty: {
            bail:true,
            errorMessage:'Department ID not supplied'
        }
    }
};



module.exports = programmeValidator;