
const express = require('express');
const router = express.Router();
const student = require('../studentdata');
const {v4: uuidv4} = require('uuid');

//Import
const studentController = require('../controllers/studentController');
router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudent);
router.post('/', studentController.getStudentPostRequest);
router.patch('/:id', studentController.getStudentPatchRequest);
router.delete('/:id', studentController.getStudentDeleteRequest);


module.exports= router;
//Gikace@24    password




























//      This roles ve been moved from the router to studentController
//*************************************************************************/

/* // First Get request 
router.get('/',(req,res)=>{
 res.send({
    "Message":"Below is the student data",
    "data":student})
});
*/

// Post request 
// router.post('/',(req, res)=>{

//     const st = req.body;
//     student.push({...st, id:uuidv4()});
//     res.send({
//         "message":"This the updated student record",
//         "data": student
//     });
// });

//Get request
// router.get('/:id', (req,res)=>{
//     const id = req.params.id;
//     let foundstudent;
//     foundstudent = student.find((student) => student.id ===id);
//     res.send({
//         "Message":"selected student",
//         "data":foundstudent
//     })
// })

//Patch request
// router.patch('/:id',(req,res)=>{
//     const {firstName,lastName,Gender,Phone,Age} =req.body;
//     const id = req.params.id;
//     let foundstudent;
//     foundstudent = student.find((student) => student.id ===id);
//     foundstudent.firstName =firstName;
//     foundstudent.lastName = lastName;
//     foundstudent.Gender = Gender;
//     foundstudent.Age = Age;
//     foundstudent.Phone = Phone;
//     res.send({
//         "Message":"Found student is below",
//         "data": student
//     })
// })

//Delete request
// router.delete('/:id', (req,res)=>{
//     const id = req.params.id;
//     const student1 = student.filter((student)=>student.id!==id);
//     res.send({
//         "message":"The selected student is deleted from the array",
//         "data":student1
//     }) 
// })