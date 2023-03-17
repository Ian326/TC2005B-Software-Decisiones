const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    console.log("Un usuario ha iniciado sesión");
    response.render('index', {
        titulo: 'Lab17'
    });
});
module.exports = router;