const express = require('express');
const file = require('fs');

const router = express.Router();

router.get('/post', (request, response, next) => {
    
    let html = `
        <form action="/its/post" method="POST">
            <fieldset>
                <legend>Escribe para enviar una respuesta a traves de un POST:</legend>
                <div><input type="text" id="text" name="opcion"></div>
                <input type="submit" value="Aceptar">
            </fieldset>
        </form>
    `;

    response.send(html);
});

router.post('/post', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.opcion);
    file.writeFileSync('file.txt', request.body.opcion);
    response.send("Enviaste: '" + request.body.opcion + "' al servidor");
});

module.exports = router;