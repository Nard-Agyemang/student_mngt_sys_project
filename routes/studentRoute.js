const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');


router.get('/', studentsController.getAllStudents);
router.get('/:id',studentsController.getStudent);
router.post('/',studentsController.createStudent);




module.exports = router;