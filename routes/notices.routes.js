const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware')

const noticesController = require('../controllers/notices.controller');

router.get('/ads', noticesController.getAll);
router.get('/ads/:id', noticesController.getById);
router.post('/ads', authMiddleware, noticesController.postDoc);
router.put('/ads/:id', authMiddleware, noticesController.putDoc);
router.delete('/ads/:id', authMiddleware, noticesController.deleteDoc);
router.get('/ads/search/:searchPhrase', noticesController.getSearchPhrase)

module.exports = router;