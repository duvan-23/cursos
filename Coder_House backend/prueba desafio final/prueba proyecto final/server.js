const express = require('express')
const {Router} = express;

const app = express()
const fs =require('fs');

const routerProductos= new Router();
const routercarrito= new Router();

const messages = [];
const productos = [];
const administrador =true;
app.use(express.json())
const palabras = ['Frase', 'inicial'];
const proyecto = require('./archivo.js');
let contenedorProductos = new proyecto.Contenedor("productos.txt");
let contenedorProductosCarro = new proyecto.Contenedor("carrito.txt");
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.set('views', './public')

app.set('view engine', 'pug')

//-------------productos-------------
routerProductos.get('/:id?', async(req, res) => {
    const { id } = req.params
    let producto=[], productos1;
    if(id){
        productos1=await contenedorProductos.getById(parseInt(id));
        if(productos1!='Id especificado no existe en el archivo'){
            producto.push(productos1);
            producto[0].admin=administrador;
        }
        return res.render('./views/productos',{productos: producto});
    }
    productos1=await contenedorProductos.getAll();
    if(productos1!=""){
        productos1[0].admin=administrador;
    }
    return res.render( './views/productos', {productos:productos1});
})

routerProductos.post('/', async(req, res) => {
    if(administrador){
        await contenedorProductos.save(req.body);
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/ metodo POST no autorizado"});
    }
})
routerProductos.delete('/:id',async(req, res) => {
    if(administrador){
        const {id} = req.params;
        await contenedorProductos.deleteById(Number(id))
        res.render( './views/productos', {productos:await contenedorProductos.getAll()});
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo DELETE no autorizado"});
    }
})

routerProductos.put('/:id', async (req, res) => {
    if(administrador){
        const { id } = req.params
        let datos = req.body;
        datos.id=Number(id);
        res.send(await contenedorProductos.putId(id,datos));
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo PUT no autorizado"});
    }
})

//-------------carrito-------------
routercarrito.get('/', async(req, res) => {
    let productos1=await contenedorProductosCarro.getAll();
    if(productos1!=""){
        productos1[0].admin=administrador;
    }
    return res.render( './views/productos_carro', {productos:productos1});
})

routercarrito.post('/', async(req, res) => {
    let producto, productos1;
    let datos = req.body;
    // return res.render('./views/productos',{productos: producto});
    if(administrador){
        producto=await contenedorProductos.getById(parseInt(datos.id));
        if(producto!='Id especificado no existe en el archivo'){
            let data ={
                timestamp: Date.now(),
                productos:producto
            }
            await contenedorProductosCarro.save(data);
            productos1=await contenedorProductosCarro.getAll();
            return res.render('./views/productos_carro',{productos: producto});
        }
        
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/ metodo POST no autorizado"});
    }
})

routercarrito.delete('/:id',async(req, res) => {
    if(administrador){
        const {id} = req.params;
        await contenedorProductosCarro.deleteById(Number(id))
        res.render( './views/productos', {productos:await contenedorProductosCarro.getAll()});
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo DELETE no autorizado"});
    }
})


routercarrito.put('/:id', async (req, res) => {
    let producto;
    if(administrador){
        const { id } = req.params
        let datos = req.body;
        producto=await contenedorProductos.getById(parseInt(datos.idProducto));
        if(producto!='Id especificado no existe en el archivo'){
            let data ={
                timestamp: Date.now(),
                productos:producto,
                id:Number(id)
            }
            res.send(await contenedorProductosCarro.putId(id,data));
        }
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo PUT no autorizado"});
    }
})

app.use('/api/productos',routerProductos)
app.use('/api/carrito',routercarrito)
app.use((req, res, next) => {
    
    res.status(404).send({error:-2,descripcion: "ruta "+req.url+ " metodo "+req.method+" no implementada"})
  })
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on('error', error => console.log(`Error en servidor ${error}`))