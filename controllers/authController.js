require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const bcrypt = require('bcrypt');

class authController {
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findByEmail(email);
            if (!User) {
                return res.status(401).send({
                    message: 'Invalid credentials'
                });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).send({ 
                    message: 'Invalid credentials'});
            }

            const token = jwt.sign(
                { user: user.user_id, role: 'user'},
                process.env.SECRETPASS, //This is your secret key.
                { expiresIn: '1h' } //This is an options Object. It expiresIn: '1h'
            );
            res.send({ message: 'Login successful', token });
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Login failed' });
        }
    };

    logout = (req, res) => {
        res.send({ message: 'Logout successful' });
    };

    
    userDetails = async (req, res) => {
        try {
            
            const user = await User.findByPk(req.user);
            res.send({ message: 'User details', data: user });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Failed to get user details' });
        }
    };

}

module.exports = new authController();
