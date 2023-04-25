import mongoose from 'mongoose';
import * as models from './models/usuario.js';

CRUD();
async function CRUD(){
    try{
        const URL ='mongodb://localhost:27017/ecommerce';

        let conexion = await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Coneción a MongoDB correcta");

        //Create
        const usuario ={nombre:'Juan', apellido: 'Perez', email: 'jp@g.com',usuario:'jp', password: 123};
        const usuarioCreado = await models.usuarios.create(usuario);
        console.log("Usuario creado", usuarioCreado);

        //Read
        const usuarios = await models.usuarios.find();
        console.log("Usuarios", usuarios);

        //Update
        const usuarioActualizado = await models.usuarios.findByIdAndUpdate(usuarioCreado.id, {nombre:"Juanito"})
        console.log("Usuario Actualizado", usuarioActualizado);

        //Delete
        // const usuarioEliminado = await models.usuarios.findByIdAndDelete(usuarioActualizado.id);//eliminar por Id
        // const usuarioEliminado = await models.usuarios.deleteMany({nombre:'Juan'});eliminar varios con filtro
        const usuarioEliminado = await models.usuarios.deleteMany({});//eliminar todo
        console.log("Usuario Eliminado", usuarioEliminado);
    } catch(error){
        console.log("Error", error);
    } finally{
        mongoose.disconnect();
    }
    console.log("Fin del programa");
}