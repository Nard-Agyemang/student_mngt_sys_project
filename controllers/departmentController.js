const department = require('../models/Department');

class departmentClass {
    
    //Shows all data in table of db
    getAllDepartments = async (req, res) => {
        const Department = await department.findAll();
        res.send({
            "message": "List of all Departments",
            "data": Department
        })
    };

    //Shows selected data(s) in table from db
    getDepartment = async(req, res) => {
        const id = req.params.id;
        const Department = await department.findByPk(id);
        res.send({
            "message":"Selected department",
            "data": Department
        })
    };

    //Adds data to table in db
    getDepartmentPostRequest = async (req, res) => {
        const {DepartmentID, DepartmentName,DateOpened} = req.body;
        const Department = await department.create({DepartmentID,DepartmentName,DateOpened});
        res.send({
            "Message": "One department created successfully",
            "Data": Department
        })
    };

    //Updates data in the table in db
    getDepartmentPatchRequest = async (req, res) => {
        const id = req.params.id;
        const {DepartmentName, DateOpened} = req.body;
        const Department = await department.findByPk(id);
        Department.update({DepartmentName,DateOpened});
        res.send({
            "message":"One department data updated",
            "Data":Department
        })
    };

    //Deletes data in the table of the db
    getDepartmentDeleteRequest = async (req, res) => {
        const id = req.params.id;
        const Department = await department.findByPk(id);
        Department.destroy();
        res.send({
            "Message": "The selected Department has been deleted",
            "data": Department
        });
    }

}


module.exports = new departmentClass();