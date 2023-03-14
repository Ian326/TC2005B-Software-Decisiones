const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        titulo: 'Lab12'
    });
});
module.exports = router;