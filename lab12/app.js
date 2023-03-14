const express = require('express');
const app = express();

const path = require('path');
const filesystem = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/inicio', (request, response, next) => {
  response.render('index');
});

app.use((request, response, next) => {
  response.render('404');
});

app.listen(3000, () => {
  console.log('Server init at PORT 3000');
});