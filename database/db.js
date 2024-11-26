require('dotenv').config();

const sequelize = require('sequelize');

const db = new sequelize(
    process.env.DB_Name,
    process.env.DB_User,
    process.env.DB_Password,
    {
        host: process.env.DB_Host,
        dialect: 'mysql'
        // dialect: process.env.DB_Dialect
    }
);

db.authenticate()
.then(()=>{console.log('db connection sucessful')})
.catch(()=>{console.error('error happened in db connection')});


module.exports = db;