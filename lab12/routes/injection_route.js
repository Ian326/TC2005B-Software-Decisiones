const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('injection', {
        titulo: 'POST al Server',
    });
});

router.post('/', (request, response, next) => {
    response.render('injection_retrieve', {
        titulo: 'Datos Enviados',
        randText: request.body.randText,
    });
});
module.exports = router;