const express = require('express');
const {Router} = express;

const app =express();


//mascotas

const routerMascotas = new Router();
routerMascotas.use(express.json());

const mascotas =[];
routerMascotas.get('/', (req, res)=>{
    res.json(mascotas)
})

routerMascotas.post('/',(req, res) =>{
    mascotas.push(req.body)
    res.json(mascotas)
})
//personas

const routerPersonas = new Router();
routerPersonas.use(express.json());

const personas =[];
routerPersonas.get('/', (req, res)=>{
    res.json(personas)
})

routerPersonas.post('/', (req, res)=>{
    personas.push(req.body)
    res.json(personas)
})
//Carga de Routers

app.use('/mascotas',routerMascotas)
app.use('/personas',routerPersonas)


const PORT=8080;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})