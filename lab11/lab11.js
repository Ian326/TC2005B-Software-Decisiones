const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log("Primer Middleware");
    next();
});

app.use("/bienvenida", (request, response, next) => {
    let html = `
        <h2>Hola, jeje :)</h2>
        <img src="https://i.imgur.com/VczzIc7.gif" style="width:1980px;height:1080px;">
    `;
    response.send(html);
});

app.use("/contacto", (request, response, next) => {
    response.send("Creador: A01708940");
});

app.use("/faq", (request, response, next) => {
    let html = `
        <h1>Describe el archivo package.json</h1>
        <p>El archivo 'package.json', permite manejar la estructura del proyecto 
        mediante el uso de distintas deptendencias, como los descargables en el node package module.</p>
    `;
    response.send(html);
});

const its = require("./routes/its.routes");

app.use("/its", its);

const ice = require("./routes/ice.routes");

app.use("/ice", ice);

app.use((request, response, next) => {
    console.log("Otro Middleware");
    let html = `
        <h1>Bienvenido a mi lab11</h1>
        <p>Esta es la front-page</p>
        <p>Las rutas que puedes tomar son las siguientes:</p>
        <a href="/bienvenida">Bienvenida</a><br>
        <a href="/contacto">Contacto</a><br>
        <a href="/faq">Preguntas de la Actividad</a><br>
        <a href="/its/post">Input Text Field</a><br>
        <a href="/ice/post">Image Selector</a><br>
    `;
    response.send(html);
});

app.use((req, res, next) =>{
    res.status(404);
    res.send('404: File Not Found');
});

app.listen(3000);