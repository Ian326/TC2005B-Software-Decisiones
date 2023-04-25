const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('faq', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        titulo: 'FAQ',
    });
});
module.exports = router;