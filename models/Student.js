const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
// const Student = require('./Programme');
const Programme = require('./Programme');

class Student extends Model{};

Student.init({
    StudentID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    FirstName:{
        type: DataTypes.STRING
    },
    LastName: {
        type: DataTypes.STRING
    },
    ProgrammID: {
        type: DataTypes.STRING
    }
},

//Below is an object
{
    sequelize,
    tableName: 'Student',
    modelName: 'Student',
    timestamps: false
});

Student.belongsTo(Programme,{
    foreignKey:'ProgrammeID',
    as: 'programme'
});


module.exports = Student;