const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(solicitud, respuesta) {

    respuesta.render('home', {
        nombre: 'lenis'
    });

});


app.get('/about', function(solicitud, respuesta) {

    respuesta.render('about', );

});

/* app.get('/', function(solicitud, respuesta) {

    respuesta.send('Hola Mundo');

    let salida = {
        nombre: 'Lenis',
        edad: 45,
        url: solicitud.url

    }

    respuesta.send(salida);

});


app.get('/data', function(solicitud, respuesta) {

    respuesta.send('Hola Data');


}); */


app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);
})