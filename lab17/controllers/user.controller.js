exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        console.log('Un usuario ha cerrado sesion');
        response.redirect('/inicio');
    });
};