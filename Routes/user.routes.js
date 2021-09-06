const express = require("express");

const userController = require('../Controller/user.controller');
const studentController = require('../Controller/student.controller');

const router = express.Router();

router.get('/login', userController.loginController);

router.get('/register',  userController.registerController);

router.post('/register', studentController.publishStudentController);

router.post('/login',  userController.verifyController);

module.exports = router;