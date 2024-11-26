const express = require('express');
const router = express.Router();
//const programme = require('../controllers/programmeController');
const programmeController = require('../controllers/programmeController');


router.get('/', programmeController.getAllProgrammes);
router.get('/:id', programmeController.getProgramme);
router.post('/', programmeController.createProgramme);
router.patch('/:id', programmeController.updateProgramme);
router.delete('/:id', programmeController.deleteProgramme);



module.exports = router;