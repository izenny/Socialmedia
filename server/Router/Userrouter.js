const router = require('express').Router();
const userController = require('../Controllers/Usercontroller')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.post('/login',userController.verifyLogin)
router.put('/friendreq/:userId',userController.friendReqestsId)
module.exports = router