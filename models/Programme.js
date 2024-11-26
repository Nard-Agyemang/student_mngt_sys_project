const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Department = require('./Department');

class Programme extends Model{};

Programme.init({
    ProgrammeID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ProgrammeName:{
        type: DataTypes.STRING
    },
    ProgrammeAmount:{
        type: DataTypes.DECIMAL
    },
    DepartmentID: {
        type: DataTypes.STRING
    }
},
//Below is an object
{
sequelize,
tableName: 'Programme',
modelName: 'Programme',
timestamps: false
});

Programme.belongsTo(Department,{
    foreignKey:'DepartmentID',
    as:'department'
});


module.exports = Programme;