const express = require('express')


const app = express()


app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {mensaje: 'Nuestra primer plantilla con Pug'})
})
app.listen(8080)