const text = require('../models/text.model');

exports.get_injection = (request, response, next) => {
    response.render('injection', {
        titulo: 'POST al Server',
    });
};

exports.post_injection = (request, response, next) => {

    const randText = new text({
        randText: request.body.randText,
    });

    randText.save();
    response.redirect('/injection_retrieve');
};

exports.retrieve = (request, response, next) => {
    response.render('injection_retrieve', { titulo: 'Datos Enviados', randTextArray: text.fetchAll()});
}