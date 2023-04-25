const logger = require( '../scripts/logger.js');
const services = require( '../negocio/negocio.js');
const administrador =true;
const origenProducto = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta /api/productos, Metodo ${method}`);
    if (!req.user.contador) {
        req.user.contador = 0
    }
    let contador =req.user.contador+1;
    await services.actualizarUsuario(req.user.username,contador);
   
    const { id } = req.params
    let producto=[], productos1;
    const usuario =await  services.mostrarUsuarioByUser(req.user.username);

    let foto=__dirname+"/"+usuario.foto;
    if(id){
        productos1=await services.mostrarProductoById(parseInt(id));
        
        if(productos1!='Id especificado no existe en el archivo'){
            producto.push(productos1[0]);
            producto[0].admin=administrador;
        }
        return res.render('./views/productos',{productos: producto, nombre:usuario.name,foto:foto});
    }
    productos1=await services.mostrarProductos();
    
    if(productos1!=""){
        productos1[0].admin=administrador;
    }
    return res.render( './views/productos', {productos:productos1, nombre:usuario.name,foto:foto});
}
const postProducto = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    if(administrador){
        await services.insertarProductos(req.body);
        let productos1=await services.mostrarProductos();

        return res.render( './views/productos', {productos:productos1});
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/ metodo POST no autorizado"});
    }
}
const deleteProducto = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    if(administrador){
        const {id} = req.params;
        await services.eliminarProducto(Number(id));
        res.render( './views/productos', {productos:await services.mostrarProductos()});
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo DELETE no autorizado"});
    }
}
const putProducto = async (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${url}, Metodo ${method}`);
    if(administrador){
        const { id } = req.params
        let datos = req.body;
        datos.id=Number(id);
        res.send(await services.actualizarProducto(id,datos));
    }else{
        res.send({error:-1,descripcion: "ruta /api/productos/:id metodo PUT no autorizado"});
    }
}

module.exports={origenProducto,postProducto,deleteProducto,putProducto};