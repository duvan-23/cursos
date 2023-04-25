const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('pages/index', {mensaje:'Bienvenidos a nuestra primera plantilla de ejs'});
});

app.listen(8080);