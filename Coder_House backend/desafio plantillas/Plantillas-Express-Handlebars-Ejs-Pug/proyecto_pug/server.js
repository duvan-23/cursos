const express = require('express')


const app = express()

const productos =[];
app.use(express.urlencoded({extended:true}))
app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('formulario', {productos:productos})
})
app.get('/productos', (req, res) => {
    res.render('historial', {productos:productos})
})
app.post('/productos', (req, res) => {
    if(req.body.nombre){
        productos.push(req.body);
    }
    res.redirect('/');
});

const server = app.listen(8080, ()=>{
    console.log("Servidor esta corriendo satisfactoriamente");
})
