const express = require("express");

const studentController = require('../Controller/student.controller');

const router = express.Router();

router.get('/', studentController.studentController);

router.get('/view', studentController.viewStudentController);

// router.post('/user/register', studentController.publishStudentController);

module.exports = router;