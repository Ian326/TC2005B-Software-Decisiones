const Image = require('../models/upImage.model');

exports.get_image = (request, response, next) => {
    Image.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('upload', {
            titulo: 'Subir img al Server',
            isLoggedIn: request.session.isLoggedIn || false,
            username: request.session.username || '',
            permisos: request.session.privilegios || {}
        });
    }).catch(error => console.log(error));
};

exports.post_image = (request, response, next) => {

    console.log(request.file)
    const randImage = new Image({
        randImage: request.file.filename,
        user: request.session.username
    });

    randImage.save()
    .then(([rows, fieldData]) => {
        request.session.mensaje = "Img added to database successfully.";
        response.redirect('/image_retrieve/all');
    })
    .catch((error) => {console.log(error)});
};

exports.retrieve = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    if (request.session.mensaje) {
        let mensaje = request.session.mensaje;
    }

    Image.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('upload_retrieve',{
                                            titulo: 'Users RandImages', 
                                            randImageArray: rows,
                                            session_last_call: request.session.last_call || '',
                                            mensaje: mensaje,
                                            isLoggedIn: request.session.isLoggedIn || false,
                                            username: request.session.username || '',
                                            permisos: request.session.privilegios || {}
                                        });
    })
    .catch(err => {
        console.log(err);
    });

    
}