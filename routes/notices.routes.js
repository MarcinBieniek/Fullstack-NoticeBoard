const express = require('express');
const router = express.Router();

const noticesController = require('../controllers/notices.controller');

router.get('/ads', noticesController.getAll);
router.get('/ads/:id', noticesController.getById);
router.post('/ads', noticesController.postDoc);
router.put('/ads/:id', noticesController.putDoc);
router.delete('/ads/:id', noticesController.deleteDoc);
router.get('/ads/search/:searchPhrase', noticesController.getSearchPhrase)

module.exports = router;