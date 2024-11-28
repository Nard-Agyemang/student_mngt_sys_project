// Calling dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Calling routes
//const student = require('./studentdata');
// const studentroute = require('./routes/student');
const departmentroute = require('./routes/departmentRoute');
const programmeroute = require('./routes/programmeRoute');
const auth = require('./routes/authenticateRoute');
//const programmeroute = require('./controllers/programmeController');
const studentsroute = require('./routes/studentRoute');
const userRoute = require('./routes/userRoute');


const PORT = process.env.PORT || 3011;
app.use(bodyParser.json());



app.use('/user', userRoute);
app.use('/student',studentsroute);
app.use('/auth',auth);
app.use('/department', departmentroute)
// app.use('/students',studentroute);
app.use('/programme',programmeroute);
app.listen(PORT, ()=>
{
    console.log(`The app is running of ${PORT}`);
});