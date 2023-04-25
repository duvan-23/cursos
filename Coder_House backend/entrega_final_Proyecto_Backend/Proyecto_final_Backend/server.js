const express =require( 'express');
const  {Router}  =require( 'express');


const dotenv = require( 'dotenv/config')
const nodemailer = require('nodemailer');


const port_dev = process.env.PORT_DEV;
const cluster = require( 'cluster');
const os = require( 'os');
const parseArgs = require('minimist');

//passport
const passport = require( "passport");
const { Strategy: LocalStrategy } = require('passport-local');
//session
const session = require( 'express-session')
//encriptor
const bcrypt = require( 'bcrypt');
//logger 
const logger = require( './scripts/logger.js');

const {insertarUsuarios2,mostrarUsuarioByUser} = require( './negocio/negocio.js');
const {routerOps,routerProductos,routercarrito} = require( './router/rutas.js');

//nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user:  process.env.USER_NODEMAILER,
      pass: process.env.PASS_NODEMAILER,
    },
  })
//sms
const twilio =require('twilio');

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN

const twilioClient = twilio(accountSid, authToken)
//cluster

//validar node en cmd
//comando: tasklist /fi "imagename eq node.exe"
const options_puerto ={
    alias:{
        p:'puerto',
        m:'modo',
        e:'entorno'
    },
    default:{
        puerto:8080,
        modo:"FORK",
        entorno:"prod" //dev to developer enviroment 
    }
}
const { modo }= parseArgs(process.argv.slice(2),options_puerto);
const numCpus= os.cpus().length;
const modoCluster = process.argv[3] == 'CLUSTER';
if(cluster.isPrimary && modo =="CLUSTER" || modoCluster && cluster.isPrimary){
    logger.info('Numero de procesadores: ' + numCpus);
    logger.info('PID:' + process.pid);
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();   
    }
    cluster.on('exit', worker => {
        cluster.fork();
    })
}else{
    const adm_correo=process.env.ADM_CORREO;
    const adm_telefono=process.env.ADM_TEL;
    // PASSPORT REGISTER
    passport.use('register', new  LocalStrategy({
        passReqToCallback: true
    }, async (req, username, password, done) => {

        const { direccion,telefono,edad,name } = req.body

        let user =JSON.stringify(await  mostrarUsuarioByUser(username));
    
        user.replace("UsuariosDTO","");
        user= JSON.parse(user);
        if (user.username) {
            return done('user already registered '+username)
        }
        const rounds = 10;
        bcrypt.hash(password, rounds, async(err, hash) => {
            if (err) {
                logger.error(err)
            return
            }
            const contador=0;
            password=hash;
            const user = {
            username,
            name,
            password,
            direccion,
            telefono,
            foto:req.file.path,
            edad,
            contador
            }
            await insertarUsuarios2(user);
            
            //correo ingreso 
            let usuario_info='Registro de nuevo cliente<br>';

            usuario_info+=`<h2>Nombre: ${user.name}</h2> `;
            usuario_info+=`<h2>Edad: ${user.edad}</h2> `;
            usuario_info+=`<h2>Correo: ${user.username} </h2>`;
            usuario_info+=`<h2>Dirección: ${user.direccion} </h2>`;
            usuario_info+=`<h2>Teléfono: ${user.telefono} </h2>`;
            usuario_info+="------------------------<br>";
            
            const asunto =`Nuevo Registro de usuario`;
            const info = await transporter.sendMail({
                from: process.env.USER_NODEMAILER,
                to: [adm_correo],
                subject: asunto,
                html: usuario_info,
            })
            logger.info('Correo enviado', info)

            return done(null, user)
        })   
    }))

    // PASSPORT LOGIN
    passport.use('login', new  LocalStrategy(async(username, password, done) => {
        let user =JSON.stringify(await  mostrarUsuarioByUser(username));

        user.replace("UsuariosDTO","");
        user= JSON.parse(user);
        if (!user.username) {
            return done(null, false)
        }
        let respuesta;
        bcrypt.compare(password, user.password, (err, res) => {
            if (err) {
                logger.error(err)
            return
            }
            respuesta=res; //true or false
            if (!respuesta) {
                return done(null, false)
            }
            user.contador = 0
            return done(null, user)
        })
        
    }))

    // SERIALIZAR Y DESERIALIZAR

    passport.serializeUser(function(user, done) {
        done(null, user.username)
    })

    passport.deserializeUser(async function(username, done) {
        const usuario =await  mostrarUsuarioByUser(username);
        done(null, usuario)
    })


    const app = express()

    app.use(
        session({
            secret: 'shhhhhhhhhhhhhh',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 600000,
            },
            rolling: true,
        })
    )
    // MIDDLEWARES DE PASSPORT
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(express.json())
    app.use(express.static('./public'))
    app.use(express.urlencoded({extended:true}))
    app.set('views', './public')

    app.set('view engine', 'pug')

    app.use('/api/productos',routerProductos)
    app.use('/api/carrito',routercarrito)
    app.use('/',routerOps)

    app.use((req, res, next) => {
        const { url, method } = req
        logger.warn(`Ruta ${method} ${url} no implementada`)
        res.status(404).send({error:-2,descripcion: "ruta "+req.url+ " metodo "+req.method+" no implementada"})
    })
    process.on('uncaughtException', function (err) {
        logger.error(err);
    });

    let PORT;
    if(process.argv[2] =="dev"){
        PORT =port_dev || 8080;
    }else{
        PORT = process.env.PORT || parseInt(process.argv[2]) || 8080;
    }

    const server = app.listen(PORT, () => {
        logger.info('Servidor HTTP escuchando en el puerto ' + PORT)
    })
    server.on('error', error => logger.error(`Error en servidor ${error}`))

}