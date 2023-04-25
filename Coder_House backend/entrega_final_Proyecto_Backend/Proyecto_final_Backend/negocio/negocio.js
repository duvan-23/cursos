const {conectar,listar,listarUno,insertar,eliminar,actualizar,saveCarritoP1,deleteByIdCarritoP1,insertarUsuarios1} = require( '../persistencia/persistencia.js');

async function conectarse() {
    return conectar();
}
async function saveCarritoP2(producto,id) {
    return await saveCarritoP1(producto,id);
}
async function deleteByIdCarritoP2(id,id_producto) {
    return await deleteByIdCarritoP1(id,id_producto);
}

async function insertarUsuarios2(user) {
    return await insertarUsuarios1(user);
}

async function mostrarCarritoById(id) {
    return await listarUno("Carrito",id);
}
async function mostrarCarrito(username) {
    return await listar("Carrito",username);
}
async function insertarCarrito(data) {
    return await insertar("Carrito",data);
}
async function eliminarCarrito(id) {
    return await eliminar("Carrito",id);
}
async function actualizarCarrito(id,producto,id_prod) {
    return await actualizar("Carrito",id,producto,id_prod);
}

async function mostrarProductoById(id) {
    return await listarUno("Productos",id);
}
async function mostrarProductos() {
    return await listar("Productos");
}
async function insertarProductos(data) {
    return await insertar("Productos",data);
}
async function eliminarProducto(id) {
    return await eliminar("Productos",id);
}
async function actualizarProducto(id,producto) {
    return await actualizar("Productos",id,producto);
}

async function mostrarUsuarioByUser(user) {
    return await listarUno("Usuarios",user);
}
async function actualizarUsuario(id,producto) {
    return await actualizar("Usuarios",id,producto);
}

module.exports={conectarse,saveCarritoP2,deleteByIdCarritoP2,insertarUsuarios2,mostrarCarritoById,mostrarCarrito,insertarCarrito,eliminarCarrito,actualizarCarrito,mostrarProductoById,mostrarProductos,insertarProductos,eliminarProducto,actualizarProducto,mostrarUsuarioByUser,actualizarUsuario}