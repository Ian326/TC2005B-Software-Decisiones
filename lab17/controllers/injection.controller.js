const text = require('../models/text.model');

exports.get_injection = (request, response, next) => {
    text.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('injection', {
            titulo: 'POST al Server',
        });
    }).catch(error => console.log(error));
};

exports.post_injection = (request, response, next) => {

    const randText = new text({
        randText: request.body.randText,
    });

    randText.save()
    .then(([rows, fieldData]) => {
        request.session.mensaje = "Info added to database successfully.";
        request.session.last_call = randText.randText;
        response.redirect('/injection_retrieve');
    })
    .catch((error) => {console.log(error)});
    
};

exports.retrieve = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje = '';

    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    text.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('injection_retrieve',{
                                            titulo: 'Users RandTexts', 
                                            randTextArray: rows,
                                            session_last_call: request.session.last_call || '',
                                            mensaje: mensaje
                                        });
    })
    .catch(err => {
        console.log(err);
    });

    
}