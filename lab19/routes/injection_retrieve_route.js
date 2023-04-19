const Text = require('../models/text.model');
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    Text.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('injection_retrieve',{
                                            titulo: 'Users RandTexts', 
                                            randTextArray: rows,
                                            session_last_call: request.session.last_call || '',
                                            mensaje: "Info added to database successfully.",
                                            isLoggedIn: request.session.isLoggedIn || false,
                                            username: request.session.username || '',
                                            permisos: request.session.privilegios || {}
                                        });
    })
    .catch(err => {
        console.log(err);
    });
});
module.exports = router;