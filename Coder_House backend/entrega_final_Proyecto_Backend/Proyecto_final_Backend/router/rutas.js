const {register,origen,failregister,faillogin,postOrigen,login,logout,perfil,comprar} = require( '../controlador/controlador.js');
const {origenCarrito,origenCarritoById,postCarrito,postCarritoProductos,deleteCarrito,deleteCarritoProductos,actualizarCarritoProductos} = require( '../controlador/controladorCarrito.js');
const {origenProducto,postProducto,deleteProducto,putProducto} = require( '../controlador/controladorProducto.js');
const upload = require('../conf_storage/storage');
const passport = require( "passport");
const express = require( 'express');
const app = express.Router();
const  {Router}  =require( 'express');
const routerProductos= new Router();
const routercarrito= new Router();
function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
    next()
    } else {
    res.redirect('/login')
    }
}
app.post('/register',upload.single('file'), passport.authenticate('register', { failureRedirect: '/failregister', successRedirect: '/api/productos/'}));
app.get('/register', async(req, res) => {
    await register(req,res);
})

app.get('/', isAuth, async (req, res) => {
    await origen(req,res);
})
app.get('/failregister', async (req, res) => {
    await failregister(req,res);
})
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin', successRedirect: '/api/productos/'}));
app.get('/faillogin', async(req, res) => {
    await faillogin(req,res);
})

app.post('/', async(req, res) => {
    await postOrigen(req,res);    
})

app.get('/login', async(req, res) => {
    await login(req, res);
})
app.get('/logout', async(req, res) => {
    await logout(req,res);
})
app.get('/perfil', isAuth, async(req, res) => {
    await perfil(req,res);
})
app.post('/comprar', async(req, res) => {
    await comprar(req,res); 
})

 //-------------productos-------------


 routerProductos.get('/:id?', isAuth, async(req, res) => {
    await origenProducto(req,res);
})

routerProductos.post('/', async(req, res) => {
    await postProducto(req,res);
})
routerProductos.delete('/:id',async(req, res) => {
    await deleteProducto(req,res);
})

routerProductos.put('/:id', async (req, res) => {
    await putProducto(req,res);
})
//-------------carrito-------------
routercarrito.get('/', isAuth, async(req, res) => {//1
    await origenCarrito(req,res);
})

routercarrito.get('/:id/productos', isAuth, async (req, res) => {//1
    await origenCarritoById(req,res);
})

routercarrito.post('/', async(req, res) => {//1
    await postCarrito(req,res);
})
routercarrito.post('/:id/productos', async(req, res) => {
    await postCarritoProductos(req,res);
})

routercarrito.delete('/:id',async(req, res) => {//1
    await deleteCarrito(req,res);
})

routercarrito.delete('/:id/productos/:id_prod',async(req, res) => {
    await deleteCarritoProductos(req,res);
})


routercarrito.put('/:id/productos/:id_prod', async (req, res) => {
    await actualizarCarritoProductos(req,res);
})

const routerOps=app;
module.exports={routerOps,routercarrito,routerProductos};