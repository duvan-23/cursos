const ContenedorMongoDb = require( './contenedor/ContenedorMongoDb.js');

const dotenv = require( 'dotenv/config')
const {getDao} = require('../factory/factory.js')
const {getDaoDbSelect,getDaoDbSelectOne,getDaoDbInsert,getDaoDbDelete,getDaoDbUpdate} = require('../factory/factoryDb.js')

const url = process.env.URL;
const contenedorMongo = new ContenedorMongoDb(url);

async function conectar(){
    contenedorMongo.conectar();
}
async function listar(tabla,data=" "){
    let dto1= getDao(tabla);
    let dto= getDaoDbSelect(tabla,data);
    return dto1(await dto);
}
async function listarUno(tabla,data){
    let dto1= getDao(tabla);
    let dto= getDaoDbSelectOne(tabla,data);
    return dto1(await dto);
}
async function insertar(tabla,data){
    let dto1= getDao(tabla);
    let dto= getDaoDbInsert(tabla,data);
    return dto1(await dto);
}
async function eliminar(tabla,data){
    let dto1= getDao(tabla);
    let dto= getDaoDbDelete(tabla,data);
    return dto1(await dto);
}
async function actualizar(tabla,data1,data2,data3=" "){
    let dto1= getDao(tabla);
    let dto= getDaoDbUpdate(tabla,data1,data2,data3=" ");
    return dto1(await dto);
}
async function saveCarritoP1(producto,id){
    return await contenedorMongo.saveCarritoP(producto, id);
}
async function deleteByIdCarritoP1(id,id_producto){
    return await contenedorMongo.deleteByIdCarritoP(id, id_producto);
}
async function insertarUsuarios1(data){
    return await contenedorMongo.insertarUsuarios(data);
}
module.exports={conectar,listar,listarUno,insertar,eliminar,actualizar,saveCarritoP1,deleteByIdCarritoP1,insertarUsuarios1}