const ContenedorMongoDb = require( '../persistencia/contenedor/ContenedorMongoDb.js');
const dotenv = require( 'dotenv/config')
const url = process.env.URL;

let getDaoDbSelect = function(opcion, data=" "){
    switch (opcion) {
        case 'Carrito':
            dao = new ContenedorMongoDb(url);
            dao= dao.getAllCarrito(data);
            break
        case 'Productos':
            dao = new ContenedorMongoDb(url);
            dao= dao.getAll();
            break

    } 
    return dao;
}
let getDaoDbSelectOne = function(opcion, data=" "){
    switch (opcion) {
        case 'Carrito':
            dao = new ContenedorMongoDb(url);
            dao= dao.getByIdCarrito(data);
            break
        case 'Productos':
            dao = new ContenedorMongoDb(url);
            dao= dao.getById(data);
            break
        case 'Usuarios':
            dao = new ContenedorMongoDb(url);
            dao= dao.getByNombre(data);
            break

    } 
    return dao;
}
let getDaoDbInsert = function(opcion,data){
    switch (opcion) {
        case 'Carrito':
            dao = new ContenedorMongoDb(url);
            dao= dao.saveCarrito(data);
            break
        case 'Productos':
            dao = new ContenedorMongoDb(url);
            dao= dao.save(data);
            break
        case 'Usuarios':
            dao = new ContenedorMongoDb(url);
            dao= dao.insertarUsuarios(data);
            break
    } 
    return dao;
}
let getDaoDbDelete = function(opcion,data){
    switch (opcion) {
        case 'Carrito':
            dao = new ContenedorMongoDb(url);
            dao= dao.deleteByIdCarrito(data);
            break
        case 'Productos':
            dao = new ContenedorMongoDb(url);
            dao= dao.deleteById(data);
            break
    } 
    return dao;
}
let getDaoDbUpdate = function(opcion,data1,data2,data3=" "){
    switch (opcion) {
        case 'Carrito':
            dao = new ContenedorMongoDb(url);
            dao= dao.putIdCarritoP(data1,data2,data3);
            break
        case 'Productos': 
            dao = new ContenedorMongoDb(url);
            dao= dao.putId(data1,data2);
            break
        case 'Usuarios':
            dao = new ContenedorMongoDb(url);
            dao= dao.putUsuarios(data1,data2);
            break
    } 
    return dao;
}
module.exports={getDaoDbSelect,getDaoDbSelectOne,getDaoDbInsert,getDaoDbDelete,getDaoDbUpdate};