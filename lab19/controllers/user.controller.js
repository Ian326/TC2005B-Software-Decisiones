const user = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const mensaje = request.session.mensaje || '';
    if (request.session.mensaje) {
        request.session.mensaje  = '';
    }

    response.render('logIn', {
        titulo: 'Iniciar Sesion',
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        permisos: request.session.privilegios || {}
    });
};

exports.post_login = (request, response, next) => {

    user.fetchOne(request.body.username)

    .then(([rows, fieldData]) => {

        if (rows.length == 1) {

            bcrypt.compare(request.body.password, rows[0].userPassword)

            .then((doMatch) => {

                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = rows[0].userName;

                    user.fetchPermissions(rows[0].userName)

                    .then(([fPermissions, fieldData]) => {

                        console.log('Un usuario ha iniciado sesion exitosamente');

                        if(fPermissions[0]){

                            request.session.privilegios = fPermissions[0];

                            if(fPermissions[0].uploadImages == 1){
                                console.log('Este usuario tiene permiso para subir imágenes.')
                            }
                        }

                        else{

                            console.log('Advertencia: Este usuario no cuenta con privilegios')
                        }

                        response.redirect('/inicio');
                    })

                    .catch((error) => console.log(error));

                }

                else {

                    request.session.mensaje = "Usuario y/o contraseña incorrectos";
                    console.log('Un usuario ha fallado inicio sesion')
                    response.redirect('/session/login');
                }
            })

            .catch((error) => console.log(error));
        }

        else {
            request.session.mensaje = "Usuario y/o contraseña incorrectos";
            console.log('Un usuario ha fallado inicio sesion')
            response.redirect('/session/login');
        }
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.get_signup = (request, response, next) => {
    response.render('signUp', {
        titulo: 'Registrate',
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.privilegios || {}
    });
};

exports.post_signup = (request, response, next) => {
    const newuser = new user({
        username: request.body.username,
        password: request.body.password,
    });

    newuser.save()
    .then(([rows, fieldData]) => {
        response.redirect('/session/login');
        console.log('Un usuario se ha registrado')
    })
    .catch((error) => {console.log(error)});
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        console.log('Un usuario ha cerrado sesion');
        response.redirect('/session/login');
    });
};