//External call for all 
const Department = require('../models/Department');
const Programme = require('../models/Programme');

class ProgrammeClass{
    getAllProgrammes = async (req, res) => {
        const programme = await Programme.findAll({
            include:{
                model:Department,
                as:'department',
                attributes:['DepartmentName']
            }
        });

        res.send({
            "Message":"List of programme",
            "data":programme
        })
    };

    
    getProgramme = async(req, res) => {
        const id = req.params.id;
        const programme = await Programme.findByPk(id, {include:{
                model:Department,
                as: 'department',
                attributes:['DepartmentName'] //Department
            }});

            if(!programme){
                return res.status(404).send({
                    "message":"no programme found"
                })
            }
            else {
                res.send({
                    "message":"Selected department",
                    "data": programme
                })

        }
    };

    //Post request
    createProgramme = async(req, res) => {
        const {ProgrammeID, ProgrammeName, ProgrammeAmount, DepartmentID} = req.body;
        const createProgramme = await Programme.create({
            ProgrammeID,ProgrammeName,ProgrammeAmount,DepartmentID
        })
        await createProgramme.reload({
                include:{
                    model: Department,
                    as: 'department',
                    attributes: ['DepartmentName'] //Department
                }
            })
            res.send({
                "message" : "Created a programme",
                "data" : createProgramme
            })
        };


    //Patch request for programme
    updateProgramme = async (req, res) => {
        const {ProgrammeName, ProgrammeAmount, DepartmentID} = req.body;
        
        //Assigning request parameters to variable ProgrammeID
        const id = req.params.id;
       const updateProgramme = await Programme.findByPk(id);

        // Resolved this code issue with the code below and one above
        // const updateProgramme = await Programme.update(
        //     {ProgrammeName, ProgrammeAmount, DepartmentID}
        // );

        await updateProgramme.update({ProgrammeName, ProgrammeAmount, DepartmentID});

        await updateProgramme.reload({
            include:{
                model: Department,
                as: 'department',
                attributes: ['DepartmentName']
            }
        })
        res.send({
            "message" : "Below is the updated programme",
            "data" : updateProgramme
        })    
    };

    deleteProgramme = async (req, res) => {
        const id = req.params.id;
        const programme =  await Programme.findByPk(id)
        programme.destroy();
        res.send({
            "message" : "Below is the deleted Programme",
            "data" : programme
        })        
    };


    }


module.exports = new ProgrammeClass();