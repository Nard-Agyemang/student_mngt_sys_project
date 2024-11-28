const User = require('../models/userModel');
const bcrypt = require('bcrypt');
// const {v4:UUIDV4} = require('uuid');

class userController {
    createUser = async (req, res) => {
        try {
            const { name, email, password } = req.body;
             // Storing passwords in plaintext in the database is terrible.
            // Hashing the value with an appropriate cryptographic hash function is better.
            const salt = await bcrypt.genSalt(); // generate a random salt

            const hashed = await bcrypt.hash(password, salt); // hash the password

            const user = await User.create({ name, email, password: hashed });
            res.status(201).send({ message: 'User created successfully', data: user });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: 'Error creating user' });
        }
    };

    getAllUsers = async (req, res) => {
        try {
            const users = await User.findAll();
            res.send({ message: 'List of users', data: users });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: 'Error retrieving users' });
        }
    };

    getOneUser = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.send({ message: 'Specified user', data: user });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: 'Error retrieving user' });
        }
    };

    updateUser = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            const { name, email, password } = req.body;
            await user.update({ name, email, password });
            res.send({ message: 'User updated successfully', data: user });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: 'Error updating user' });
        }
    };

    deleteUser = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            await user.destroy();
            res.send({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: 'Error deleting user' });
        }
    };
}

module.exports = new userController();
