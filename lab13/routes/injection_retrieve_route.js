const text = require('../models/text.model');
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('injection_retrieve', {
        titulo: 'Users RandTexts',
        randTextArray: text.fetchAll()
    });
});
module.exports = router;