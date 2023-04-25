import mongoose from 'mongoose';
import * as models from './models/usuario.js';
ReadFromDB();
async function ReadFromDB() {
    try {
        const URL = "mongodb+srv://duvan:123@cluster0.sdggjza.mongodb.net/ecommerce?retryWrites=true&w=majority";
        let conexion = await mongoose.connect(URL);
        console.log("Conexion exitosa");
        // Read usuarios
        const usuarios = await models.usuarios.find();
        console.log(usuarios);

        const usuario = new models.usuarios(
            {
                nombre:"Fdereico",
                apellido:"Perez",
                dni:"12345678"
            }
        );
        await usuario.save();
        console.log("Usuario creado");
        return
    } catch (error) {
        console.log(error);
    }
}