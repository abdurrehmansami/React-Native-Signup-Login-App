
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.delete('/:id', userController.deleteUserById);
router.put('/:id', userController.updateUserById);


module.exports = router;