const Text = require('../models/text.model');

exports.get_injection = (request, response, next) => {
    Text.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('injection', {
            titulo: 'POST al Server',
            isLoggedIn: request.session.isLoggedIn || false,
            username: request.session.username || '',
        });
    }).catch(error => console.log(error));
};

exports.post_injection = (request, response, next) => {

    const randText = new Text({
        randText: request.body.randText,
        user: request.session.username
    });

    randText.save()
    .then(([rows, fieldData]) => {
        request.session.mensaje = "Info added to database successfully.";
        request.session.last_call = randText.randText;
        response.redirect('/injection_retrieve');
    })
    .catch((error) => {console.log(error)});
    
};

exports.retrieve = async (request, response, next) => {

    let mensaje = '';

    if (request.session.mensaje != '') {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    let cookies = request.get('Cookie') || '';
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const texts = await Text.fetchAll()

    try{
        response.render('injection_retrieve',{

            titulo: 'Users RandTexts', 
            randTextArray: texts[0],
            session_last_call: request.session.last_call || '',
            mensaje: mensaje || '',
            isLoggedIn: request.session.isLoggedIn || false,
            username: request.session.username || '',
        });
    }
    catch(error) {
        console.log(error);
    };

    
}