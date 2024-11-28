require('dotenv').config();
const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const authentication = req.headers.authorization;
    if(!authorization){
        res.status(401).send({
            "message":"unauthorized"
        })
    }

    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRETPASS, (err, decoded) =>{
        if(err){
            return res.status(401).send({
                message: 'Unauhorized'
            });
        } 
        else {
            req.user = decoded.user;
            next();
        }
    })
}


module.exports = auth;
