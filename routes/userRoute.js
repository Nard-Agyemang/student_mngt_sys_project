const router = require('express').Router();
const userController = require('../controllers/userController');
const userValidationSchema = require('../validator/userValidator');
const validateSchema = require('../middleware/validatorMiddleware');
const auth = require('../middleware/authenticateMiddleware');

router.post('/', validateSchema(userValidationSchema), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', validateSchema(userValidationSchema), userController.updateUser);
router.patch('/:id', validateSchema(userValidationSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);



module.exports = router;