const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        titulo: 'Lab13'
    });
});
module.exports = router;