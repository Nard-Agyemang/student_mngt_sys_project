const Student = require('../models/Student');
const Programme = require('../models/Programme');
const Department = require('../models/Department');

class studentClass{
    getAllStudents = async (req, res) => {
        const student = await Student.findAll({
            include:{
                model:Programme,
                as:'programme',
                attributes:['ProgrammeName']
            }
        });

        res.send({
            "Message":"List of Students",
            "data":student
        })
    };

    getStudent = async(req, res) => {
        const id = req.params.id;
        const student = await Student.findByPk(id, {include:{
            model:Programme,
            as: 'programme',
            attributes:['ProgrammeName'] //Student
        }});

        if(!student){
            return res.status(404).send({
                "Message":"No Student data found"
            })
        }
        else {
            res.send({
                "Message": "Selected Student",
                "data": student
            })
        }
    };

    //Post request
    createStudent = async(req, res) => {
        const {StudentID, FirstName, LastName, ProgrammeID} = req.body;
        const createStudent = await Student.create({
            StudentID,FirstName,LastName,ProgrammeID
        })
        await createStudent.reload({
            include:{
                model: Programme,
                as: 'programme',
                attributes: ['ProgrammeName'] //Programme
            }
        })
        res.send({
            "Message": "Created a student",
            "data": createStudent
        })
    }
}



module.exports = new studentClass();