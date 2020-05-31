//Importar paquetes requeridos
const express = require('express');
const hbs = require('hbs');

//crear aplicacion
const app = express();

//Definir motor de plantillas
app.set('view engine','hbs');

//Generar partials
hbs.registerPartials(__dirname + '/views/partials/');

app.use(express.static(__dirname + '/public'));

//Configurar rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Grecia Maynez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/m', (req, res)=>{
    res.render('magritte', {
        autor : 'Grecia Maynez',
        year : new Date().getFullYear(),
        title : 'Magritte'
    });
});

app.get('/nh', (req, res)=>{
    res.render('hattori', {
        autor : 'Grecia Maynez',
        year : new Date().getFullYear(),
        title : 'Hattori'
    });
});

app.get('/c', (req, res)=>{
    res.render('caravaggio', {
        autor : 'Grecia Maynez',
        year : new Date().getFullYear(),
        title : 'Caravaggio'
    });
});

app.get('/v', (req, res)=>{
    res.render('vergvoktre', {
        autor : 'Grecia Maynez',
        year : new Date().getFullYear(),
        title : 'Vergvoktre'
    });
});


//Arrancar servidor web
app.listen(8080, ()=>{
    console.log('Escuchando el puerto 8080');
});