const express = require("express");

const indexController = require('../Controller/index.controller');

const router = express.Router();

router.get('/', indexController.indexController);

router.get('/about', indexController.aboutController);




module.exports = router;