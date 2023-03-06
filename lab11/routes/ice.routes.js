const express = require('express');
const file = require('fs');

const router = express.Router();

router.get('/post', (request, response, next) => {
    
    let html = `
        <form action="/ice/post" method="POST">
            <fieldset>
                <legend>Elige tu animal favorito: </legend>
                <button type="submit" name="opcion" value="perritos!"><img src="https://i.imgur.com/4xCi21q.jpeg" alt="doggies" width=500px height=500px></button>
                <button type="submit" name="opcion" value="gatitos!"><img src="https://i.imgur.com/vxTcAAZ.jpeg" alt="kitties" width=500px height=500px></button>
                <button type="submit" name="opcion" value="conejitos!"><img src="https://i.imgur.com/QvzXSkC.jpeg" alt="rabbits" width=500px height=500px></button>
            </fieldset>
        </form>
    `;

    response.send(html);
});

router.post('/post', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.opcion);
    file.writeFileSync('file.txt', request.body.opcion);
    response.send("Tu animal favorito: " + request.body.opcion);
});

module.exports = router;