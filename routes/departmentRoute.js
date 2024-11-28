const express = require('express');
const router = express.Router();
const departmentSchema = require('../validator/departmentValidator');
const validateSchema = require('../middleware/validatorMiddleware');
const authenticateAPI = require('../middleware/authenticateMiddleware');

// const department = require('../controllers/departmentController');
const departmentController = require('../controllers/departmentController');

//router.get('/all', departmentController.getAllDepartments); //must delete
router.get('/', authenticateAPI, departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartment);
router.post('/', validateSchema(departmentSchema), departmentController.getDepartmentPostRequest);
router.patch('/:id', departmentController.getDepartmentPatchRequest);
router.delete('/:id', departmentController.getDepartmentDeleteRequest);


module.exports = router;