const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const csrf = require('csurf');
const isAuth = require('./util/is_auth');

const app = express();

app.use(session({
    secret: 'wNQ34R0Ou72XDPBLmrx1Uik95rONQr7a', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

const csrfProtection = csrf();

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const labInicio = require('./routes/index_route');
const labFaq = require('./routes/faq_route');
const labInjection = require('./routes/injection_route');
const labRetrieve = require('./routes/injection_retrieve_route');
const labUsrs = require('./routes/users_route');

app.use('/inicio', isAuth, labInicio);
app.use('/faq', isAuth, labFaq);
app.use('/injection', isAuth, labInjection);
app.use('/injection_retrieve', isAuth, labRetrieve);
app.use('/session', labUsrs);


app.use((request, response, next) => {
  response.render('404', {
        titulo: 'E404',
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
});

app.listen(3000, () => {
  console.log('Server init at PORT 3000');
});