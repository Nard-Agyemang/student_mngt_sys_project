const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const bcrypt = require('bcrypt');


class User extends Model {
    // a static method to make it easy to find user by email
    static findByEmail = async (email) => {
        return await this.findOne({ where: { email }})
    };
}


User.init({
    userID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    /**
     * This code configures the password attribute of the User model in Sequelize to automatically hash the password before it's sent
     * This is a crucial security measure to protect user credentials.
     */
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize, 
    tableName: 'user',
    modelName: 'User',
    timestamps: false
});



module.exports = User;