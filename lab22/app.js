const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const csrf = require('csurf');
const isAuth = require('./util/is_auth');
const multer = require('multer');

const app = express();

app.use(session({
    secret: 'wNQ34R0Ou72XDPBLmrx1Uik95rONQr7a', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
}

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('randImage')); 

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
const labUpload = require('./routes/upload');

app.use('/inicio', isAuth, labInicio);
app.use('/faq', isAuth, labFaq);
app.use('/injection', isAuth, labInjection);
app.use('/injection_retrieve', isAuth, labRetrieve);
app.use('/upload', isAuth, labUpload);
app.use('/image_retrieve', isAuth, labUpload);
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