// Calling dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Calling routes
//const student = require('./studentdata');
const studentroute = require('./routes/student');
const departmentroute = require('./routes/departmentRoute');
const programmeroute = require('./routes/programmeRoute');
//const programmeroute = require('./controllers/programmeController');


const PORT = process.env.PORT || 3011;
app.use(bodyParser.json());

/*
app.get('/',(req, res)=>{
    res.send({
        "message": "Below is the student data",
        "data": student
    });
});
app.post('/', (req,res)=>{
    const data = req.body;
    res.send({
        "Message":"Below is the sent data",
        "data":data
    })
});
*/

app.use('/department', departmentroute)
app.use('/students',studentroute);
app.use('/programme',programmeroute);
app.listen(PORT, ()=>
{
    console.log(`The app is running of ${PORT}`);
});