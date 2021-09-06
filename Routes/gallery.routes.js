const express = require("express");

const galleryController = require('../Controller/gallery.controller');

const router = express.Router();

router.get('/', galleryController.galleryController);

router.get('/newpost', galleryController.newPostController);

router.post('/newpost', galleryController.uploadController);


module.exports = router;