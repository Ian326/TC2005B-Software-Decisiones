const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        titulo: 'Lab24: AJAX'
    });
});
module.exports = router;