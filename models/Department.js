const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Department extends Model{}

Department.init({
    DepartmentID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    DepartmentName:{
        type: DataTypes.STRING
    },
    DateOpened:{
        type: DataTypes.DATE
    }
},
//Below is an object
{
sequelize,
tableName: 'Department',
modelName: 'Department',
timestamps: false
}
);


module.exports = Department;