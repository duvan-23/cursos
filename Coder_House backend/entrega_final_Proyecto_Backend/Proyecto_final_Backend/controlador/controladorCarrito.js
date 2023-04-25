const logger = require( '../scripts/logger.js');
const services = require( '../negocio/negocio.js');

const origenCarrito = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta /api/carrito, Metodo ${method}`);

    let carritos=await services.mostrarCarrito(req.user.username);
    const usuario =await  services.mostrarUsuarioByUser(req.user.username);
    return res.render( './views/productos_carro', {carritos:carritos,nombre:usuario.name});
}
const origenCarritoById = async (req, res) => {
    const { url, method } = req;
        logger.info(`Ruta /api/carrito/:id/productos, Metodo ${method}`);
        const { id } = req.params;
        let productos;
        let datoCarrito = req.query.id_carro;
        productos=await services.mostrarCarritoById(parseInt(id));
        let carritos=await services.mostrarCarrito(req.user.username);
        const usuario =await  services.mostrarUsuarioByUser(req.user.username);
        return res.render( './views/productos_carro', {carritos:carritos,productos:productos[0].productos,idcarrito:datoCarrito,nombre:usuario.name});
}
const postCarrito = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    let producto;
    producto=[];
    let data ={
        user:req.user.username,
        timestamp: Date.now(),
        productos:producto
    }

    await services.insertarCarrito(data);
    let carritos=await services.mostrarCarrito(req.user.username);
    const usuario =await  services.mostrarUsuarioByUser(req.user.username);
    return res.render('./views/productos_carro',{carritos: carritos,nombre:usuario.name});
}
const postCarritoProductos = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    let producto, productos1,producto2;
    const { id } = req.params;
    let datos = req.body;
    let datoCarrito = req.query.id_carro;

    producto=await services.mostrarProductoById(parseInt(id));
    producto=producto[0];
    if(producto!='Id especificado no existe en el archivo'){
        producto2={
            nombre: producto.nombre,
            descripcion:producto.descripcion,
            codigo:producto.codigo,
            precio:producto.precio,
            stock:producto.stock,
            foto:producto.foto,
            timestamp:producto.timestamp,
            id_producto:producto.id
        }
        await services.saveCarritoP2(producto2, parseInt(datos.id));
        
        let carritos=await services.mostrarCarrito(req.user.username);
        
        productos1=await services.mostrarCarritoById(parseInt(datos.id));
    
        const usuario =await  services.mostrarUsuarioByUser(req.user.username);
        return res.render('./views/productos_carro',{carritos: carritos,productos:productos1,idcarrito:datoCarrito,nombre:usuario.name});
    }
}
const deleteCarrito = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    const {id} = req.params;
    await services.eliminarCarrito(Number(id));
 
    res.render( './views/productos', {productos:await services.mostrarCarrito(req.user.username)});
}
const deleteCarritoProductos = async (req, res) => {
    const { url, method } = req;
        logger.info(`Ruta ${url}, Metodo ${method}`);
        const {id} = req.params;
        const {id_prod} = req.params;
        await services.deleteByIdCarritoP2(Number(id), Number(id_prod));
        res.render( './views/productos', {productos:await services.mostrarCarrito(req.user.username)});
}
const actualizarCarritoProductos = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    let producto,producto2;
    const { id, id_prod } = req.params;

    let datos = req.body;
    producto=await services.mostrarProductoById(parseInt(datos.idProducto));

    producto=producto[0];
    if(producto!='Id especificado no existe en el archivo'){
        producto2={
            nombre: producto.nombre,
            descripcion:producto.descripcion,
            codigo:producto.codigo,
            precio:producto.precio,
            stock:producto.stock,
            foto:producto.foto,
            timestamp:producto.timestamp,
            id_producto:producto.id,
            id:Number(id_prod)
        }

        res.send(await services.actualizarCarrito(id,producto2,id_prod));

    }
}

module.exports={origenCarrito,origenCarritoById,postCarrito,postCarritoProductos,deleteCarrito,deleteCarritoProductos,actualizarCarritoProductos};