const express = require('express');
const router = express.Router();
const injectionController = require('../controllers/injection.controller.js');

router.get('/', injectionController.retrieve);
router.get('/:valorBusqueda', injectionController.search);

module.exports = router;