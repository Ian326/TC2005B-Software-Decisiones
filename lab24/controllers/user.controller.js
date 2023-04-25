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
    });
};

exports.post_login = (request, response, next) => {
    user.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            console.log(rows);
            bcrypt.compare(request.body.password, rows[0].userPassword)
            .then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = rows[0].userName;
                    response.redirect('/homepage');
                    console.log('Un usuario ha iniciado sesion exitosamente')
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
        csrfToken: request.csrfToken()
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