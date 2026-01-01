const express = require('express');
//second Route handlers
const userController= require('../controllers/userController');
const router = express.Router();

//third ROUTES
router.route(`/`)
    .get(userController.getAllUsers)
    .post(userController.createUser);
router.route(`/:id`)
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
module.exports = router;
