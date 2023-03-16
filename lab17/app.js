const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'wNQ34R0Ou72XDPBLmrx1Uik95rONQr7a', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const labInicio = require('./routes/index_route');
const labFaq = require('./routes/faq_route');
const labInjection = require('./routes/injection_route');
const labRetrieve = require('./routes/injection_retrieve_route');
const labUsrs = require('./routes/users_route');

app.use('/inicio',labInicio);
app.use('/faq',labFaq);
app.use('/injection',labInjection);
app.use('/injection_retrieve',labRetrieve);
app.use('/private/u', labUsrs);

app.use((request, response, next) => {
  response.render('404', {
        titulo: 'E404',
    });
});

app.listen(3000, () => {
  console.log('Server init at PORT 3000');
});