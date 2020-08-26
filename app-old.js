const http = require('http');

http.createServer((solicitud, respuesta) => {

        respuesta.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Lenis',
            edad: 45,
            url: solicitud.url

        }

        respuesta.write(JSON.stringify(salida));
        // respuesta.write('Hola Mundo');
        respuesta.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');