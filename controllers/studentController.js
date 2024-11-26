const {v4:uuidv4} = require('uuid');
const student = require ('../studentdata')

class studentClass {
    getAllStudent = (req, res) => {
        // const student = require ('../studentdata');
        res.send({
            "Message": "List of all students",
            "data" : student 
        })
    }
    
    // This replaces the old request made in the routes directory
    getStudent = (req, res) => {
        // const student = require ('../studentdata');
        const id = req.params.id;
        const foundstudent = student.find((st)=>st.id === id);
        res.send({
            "Message": "Below is the selected student",
            "data":foundstudent
        })
    }

    // replaces router.post request
    getStudentPostRequest = (req,res) => {
        // const student = require ('../studentdata');
        const st = req.body;
        student.push({...st,id:uuidv4()})
        res.send({
            "Message": "This is the updated student record",
            "data": student
        });
    }

    // replaces router.patch request typed earlier in the route dir
    getStudentPatchRequest = (req, res) => {
        // const student = require ('../studentdata');
        // const {v4:uuidv4} = require('uuid');
        const {firstName,lastName,Gender,Phone,Age} = req.body;
        const id = req.params.id;
        let foundstudent;
        foundstudent = student.find((student) => student.id ===id);
        foundstudent.firstName = firstName;
        foundstudent.lastName = lastName;
        foundstudent.Gender = Gender;
        foundstudent.Age = Age;
        foundstudent.Phone = Phone;
        res.send({
            "Message":"Found student is below",
            "data": foundstudent
        });
    }

    // replaces router.delete request typed earlier in the route dir
    getStudentDeleteRequest = (req,res) => {
        // const student = require('../studentdata');
        // const {v4:uuidv4} = require('uuid');
        const id = req.params.id;
        const student1 = student.filter((student) => student.id !== id);
        res.send({
            "Message":"The selected student is deleted from the array",
            "data" :student1
        })
    }

}

module.exports = new studentClass();