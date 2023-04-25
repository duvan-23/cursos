const logger = require( '../scripts/logger.js');
const services = require( '../negocio/negocio.js');
const { fork } = require( 'child_process');
const bcrypt = require( 'bcrypt');
const nodemailer = require('nodemailer');
const twilio =require('twilio');

const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN

const twilioClient = twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: process.env.USER_NODEMAILER,
      pass: process.env.PASS_NODEMAILER,
    },
  })
let count2=0;

const register = async (req, res) => {
    if(count2==0){
        await services.conectarse();
    }
    count2=count2+1;
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    res.render('./views/register');
}
const origen = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    res.redirect('/api/productos/');
}
const failregister = async (req, res) => {
    logger.info(`Ruta ${url}, Metodo ${method}`);
    res.render('./views/register-error');
}
const faillogin = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    res.render('./views/login-error')
}
const postOrigen = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    let datos = req.body.nombre;
    if (req.user.contador) {
        req.user.contador++
        res.redirect('/api/productos/');
    } else if(req.body.nombre){
        req.user.contador = 1;
        req.user.username = datos;
        res.redirect('/api/productos/');
    }else{
        res.redirect('/login');
    }
}
const login = async (req, res) => {
    const { url, method } = req;
        logger.info(`Ruta ${url}, Metodo ${method}`);
        if(count2==0){
            await services.conectarse();
        }
        count2=count2+1;
        if (req.isAuthenticated()) {
            res.redirect('/api/productos/');
        }else{
            res.render('./views/login')
        }
}
const logout = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    req.logout(err => {
        res.redirect('/login')
    })
}
const perfil = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    const usuario =await  services.mostrarUsuarioByUser(req.user.username);
    return res.render('./views/info',{datos: usuario,nombre:usuario.name});
}
const comprar = async (req, res) => {
    const { url, method } = req;
    const adm_correo=process.env.ADM_CORREO;
    const adm_telefono=process.env.ADM_TEL;
        const {id} =req.body;
        let productos='Lista Productos <br>';
        logger.info(`Ruta ${url}, Metodo ${method}`);
        const carrito =await  services.mostrarCarritoById(parseInt(id));
        let object= carrito[0].productos;
        object.forEach((element, index) => { 
            productos+=`<h1>  Producto  ${index+1} </h1><br>`;
            productos+=`<h2>Nombre: ${element.nombre}</h2> `;
            productos+=`<h2>Descripción: ${element.descripcion} </h2>`;
            productos+=`<h2>Codigo: ${element.codigo} </h2>`;
            productos+=`<h2>Precio: ${element.precio} </h2>`;
            productos+=`<h2>Foto: ${element.foto} </h2>`;
            productos+="------------------------<br>";

        })
        const usuario =await  services.mostrarUsuarioByUser(req.user.username);
        const asunto =`Nuevo pedido de ${usuario.name}, correo: ${usuario.username}`;
        //envia correo
        const info = await transporter.sendMail({
            from: process.env.USER_NODEMAILER,
            to: [adm_correo],
            subject: asunto,
            html: productos,
          })
        logger.info('Correo enviado', info)
        //envia sms
        const from = '+14705249066';
        const to = usuario.telefono;
        const body = `Buen día, ${usuario.name}, su pedido ha sido recibido y se encuentra en proceso`;
        const info1 = await twilioClient.messages.create({body, from, to})
        logger.info('SMS enviado', info1)
        //envia whatsapp
        try{
            const message = await twilioClient.messages.create({
                body:asunto,
                to: `whatsapp:${adm_telefono}`,
                from: 'whatsapp:+14155238886'
            });
            logger.info('Whatsapp enviado',message)
        }catch(err){
            logger.error(err)
        }
}

module.exports={register, origen, failregister,faillogin,postOrigen,login,logout,perfil,comprar};