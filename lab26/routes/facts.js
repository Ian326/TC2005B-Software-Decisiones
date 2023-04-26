const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('facts', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        titulo: 'Interesting facts',
        permisos: request.session.privilegios || {}
    });
});
module.exports = router;