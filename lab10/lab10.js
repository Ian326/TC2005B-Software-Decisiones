const http = require('http');
const file = require('fs');
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<h1>Bienvenido a la Pagina Principal</h1>');
        response.write('<a href="/1">Ir a la siguiente pagina</a>');
        response.end();
    }

    else if (request.url === "/1" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<h1>Esta es la segunda pagina</h1>');
        response.write('<form action="/1" method="POST">');

        let options = '<fieldset><legend>Escribe 1, 2 o 3 para enviar esa respuesta a traves de un POST:</legend>';
        options += '<div><input type="text" id="text" name="opcion"></div>'

        response.write(options);
        response.write('<input type="submit" value="Aceptar"></fieldset>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    }

    else if (request.url === "/1" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            const opcion = datosCompletos.split('&')[0].split('=')[1];
            console.log(opcion);
            file.writeFileSync('postData.txt', opcion);
            if (opcion === "1") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<h1>Bienvenido a la opcion 1</h1>');
                return response.end();
            }

            else if (opcion === "2") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<h1>Bienvenido a la opcion 2</h1>');
                return response.end();
            }

            else if (opcion === "3") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<h1>Bienvenido a la opcion 3</h1>');
                return response.end();
            }

            else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<h1>Lo siento, tu entrada es invalida </h1>');
                return response.end();
            }
        });
    }

    else {
        response.statusCode = 404;
        response.write("ERROR 404: Como has llegado aqui? :(");
        response.end();
    }
});

server.listen(3000);