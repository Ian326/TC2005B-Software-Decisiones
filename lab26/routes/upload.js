const Image = require('../models/upImage.model');

const express = require('express');
const router = express.Router();

const uploadController = require('../controllers/upload.controller.js');

router.get('/', uploadController.get_image);

router.post('/', uploadController.post_image);

router.get('/all', (request, response, next) => {

    let mensaje = '';

    if (request.session.mensaje != '') {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    Image.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('image_retrieve',{
                                            titulo: 'Users RandImages', 
                                            randImageArray: rows,
                                            mensaje: mensaje || '',
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