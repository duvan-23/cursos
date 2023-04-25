const express = require('express');

const app = express();

const productos =[];
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');


app.get('/productos', (req, res) => {
    res.render('inicio_productos',{productos:productos})
});
app.get('/', (req, res) => {
    res.render('inicio', {productos:productos});
});

app.post('/productos', (req, res) => {
    if(req.body.nombre){
        productos.push(req.body);
    }
    res.redirect('/');

});

const server = app.listen(8080, ()=>{
    console.log("Servidor esta corriendo satisfactoriamente");
})