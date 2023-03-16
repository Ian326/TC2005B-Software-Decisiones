const text = require('../models/text.model');
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    text.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('injection_retrieve',{
                                            titulo: 'Users RandTexts', 
                                            randTextArray: rows,
                                            session_last_call: request.session.last_call || '',
                                            mensaje: 'No has llegado aqui desde POST ;)'
                                        });
    })
    .catch(err => {
        console.log(err);
    });
});
module.exports = router;