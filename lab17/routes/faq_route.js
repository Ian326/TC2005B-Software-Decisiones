const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('faq', {
        titulo: 'FAQ',
    });
});
module.exports = router;