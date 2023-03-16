const Text = require('../models/text.model');
const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    Text.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('injection_retrieve',{
                                            titulo: 'Users RandTexts', 
                                            randTextArray: rows,
                                            session_last_call: request.session.last_call || '',
                                            mensaje: "Info added to database successfully."
                                        });
    })
    .catch(err => {
        console.log(err);
    });
});
module.exports = router;