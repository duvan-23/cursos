import mongoose from 'mongoose';

const usuariosCollection = 'usuarios';

const UsuariosSchema= new mongoose.Schema({
    nombre: {type: String},
    apellido: {type: String},
    dni: {type: String}
});

export  const usuarios = mongoose.model(usuariosCollection, UsuariosSchema);