const express = require('express');
const router = express.Router();

const injectionController = require('../controllers/injection.controller')

router.get('/', injectionController.get_injection);

router.post('/', injectionController.post_injection);

router.get('/:id', injectionController.retrieve);

router.get('/', injectionController.retrieve);

module.exports = router;