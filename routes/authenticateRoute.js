require('dotenv').config();
const express = require('express');
const router = express.Router();
const webtoken = require('jsonwebtoken');
const auth = require('../controllers/authController');



router.post('/login', auth.login)
/**
 * (req,res) => {
    const {email, password} = req.body;

    //process db to authenticate here
    const user = {
        username : email, //Required key/ the username value is to be used or must replace email
        password : password //required key/ the password value is to be used or must replace password
    }

    const token = webtoken.sign(user,process.env.SECRETPASS,{expiresIn:'1h'});
    res.send({
        "message": "authentication token",
        "token": token
    })

});
 */

router.post('/logout', auth.logout)

/**
 * (res, req) => {
});

*/

module.exports = router;