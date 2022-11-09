const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');
const imageUpload = require('../utils/imageUpload');

const noticesController = require('../controllers/notices.controller');

router.get('/ads', noticesController.getAll);
router.get('/ads/:id', noticesController.getById);
router.post('/ads', /*authMiddleware*/ imageUpload.single('foto'), noticesController.postDoc);
router.put('/ads/:id', /*authMiddleware*/ imageUpload.single('foto'), noticesController.putDoc);
router.delete('/ads/:id', /*authMiddleware*/  noticesController.deleteDoc);
router.get('/ads/search/:searchPhrase', noticesController.getSearchPhrase)

module.exports = router;