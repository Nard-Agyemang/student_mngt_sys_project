const express = require('express');
const router = express.Router();
// const department = require('../controllers/departmentController');
const departmentController = require('../controllers/departmentController');


router.get('/', departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartment);
router.post('/', departmentController.getDepartmentPostRequest);
router.patch('/:id', departmentController.getDepartmentPatchRequest);
router.delete('/:id', departmentController.getDepartmentDeleteRequest);


module.exports = router;