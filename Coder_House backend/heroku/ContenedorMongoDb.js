const mongoose =require( "mongoose");
const  {mensajes} =require( "./models/mensajes.js");
const models= mensajes;
const { usuarios}=require( "./models/usuarios.js");
const models2= usuarios;
const { productos}=require( "./models/productos.js");
const models3= productos;
let ContenedorMongoDb= class {
    constructor(nombre){
        this.nombre = nombre;
    }

    async conectar(){
        // const URL = "mongodb+srv://duvan:123@cluster0.sdggjza.mongodb.net/mensajeria?retryWrites=true&w=majority";
        let conexion = await mongoose.connect(this.nombre);

        return console.log("Conexión a MongoDB correcta");
    }
    async desconectar(){
        // await mongoose.disconnect();
        return console.log("Conexión a MongoDB finalizada");
    }
    async getById(id){
        let nombre =this.nombre;
        return await leerId(id, nombre);
    }
    async getByNombre(name){
        let nombre =this.nombre;
        return await leerNombre(name, nombre);
    }
    async listarMensajes(){
        let nombre =this.nombre;
        return await leerAll(nombre);
    }

    async insertarMensajes(data){
        let nombre =this.nombre;
        return await leerTodo(nombre,data);
    }

    async deleteById(id){
        let nombre =this.nombre;
        return await eliminarId(id,nombre);
    }

    async putId(id,datos){
        let nombre =this.nombre;
        return await actualizar(id,nombre,datos);
    }
    async putUsuarios(name,datos){
        let nombre =this.nombre;
        return await actualizarUsuarios(name,nombre,datos);
    }
    async insertarUsuarios(data){
        let nombre =this.nombre;
        return await guardarUsuarios(nombre,data);
        // return await leerTodo(nombre,data);
    }

    async insertarProductos(data){
        let nombre =this.nombre;
        return await leerProductos(nombre,data);
    }

    async listarProductos(){
        let nombre =this.nombre;
        return await leerAllProductos(nombre);
    }
}
async function guardarUsuarios(ruta,data){
    let resultado;
    try{
        // await fs.promises.writeFile(ruta, JSON.stringify(resultados[1],null, 2))
        await models2.create([data]);
        resultado=console.log("Guardo Exitosamente");
    }
    catch(err){
        resultado=console.log(err);
    }
    // return console.log(err);
    return resultado;
}  
async function actualizarUsuarios(name,nombre,datos){
    let resultado2,r3;
    try{
        const contenido =await models2.updateOne({username:name},{$set: {contador:datos}});
        resultado2 =contenido;
    }
    catch(err){
        resultado2= err;
    }
    return resultado2;
}
async function actualizar(id,nombre,datos){
    let resultado2,r3;
    try{
        const contenido =await models.updateOne({id:id},{$set: datos});
        resultado2 =contenido;
    }
    catch(err){
        resultado2= err;
    }
    return console.log(resultado2);
}

async function eliminarId(id,nombre){
    let resultado,r2;
    try{
        const contenido =await models.deleteMany({id: id});
        resultado =contenido;
    }
    catch(err){
        resultado= err;
    }
    return console.log(resultado);
}

async function leerTodo(ruta,data){
    let resultado,r2;
    try{
        const contenido =await models.find({});
        resultado =contenido;
        r2=resultado;
        resultado=resultado[resultado.length-1].id+1;
        
    }
    catch(err){
        r2= [];
        resultado= 1;
    }
    return guardar([resultado,r2],data,ruta);
    
}

async function guardar(resultados,data,ruta){
    let id;
    let datos =data;
    datos.id= resultados[0];
    resultados[1].push(datos);
    try{
        // await fs.promises.writeFile(ruta, JSON.stringify(resultados[1],null, 2))
        await models.create([datos]);
    }
    catch(err){
        console.log(err);
    }
    // return console.log(err);
    return ""+resultados[0];
}  


async function leerAll(nombre){
    let resultado,resultado2,r2=[],id=[];
    try{
        
        const contenido =await models.find({},{__v:0,_id:0});
        const contenido2 =await models.distinct("author");
        // const contenido2 =await models.mensajes.find({});
        // const contenido =await fs.promises.readFile(nombre, 'utf8');
        resultado =contenido;
        resultado2 =contenido2;
        
        resultado.forEach((element, index) => {
            for (const [key, value] of Object.entries(element)) {
                if(value.id){
                   id.push(value.id);
                }
               
              }
            r2.push({
                id:id[index],
                author:element.author,
                title:element.text,
                comments:[{
                    id:`${(Math.random() + 1).toString(36).substring(7)}${element.author.id}`,
                    commenter:element.author
                }]
            })
        })

    }
    catch(err){
        resultado= err;
    }
    return r2;
    // return resultado;
    // return console.log(resultado);
}

async function leerId(id,nombre){
    let resultado,r2;
    try{
        const contenido =await models.find({id: id}, {_id: 0, __v: 0});
        // const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =contenido;
        if(resultado.length==0){
            resultado="Id especificado no existe en el archivo"
        }
    }
    catch(err){
        resultado= err;
    }
    return resultado;
}
async function leerNombre(name,nombre){
    let resultado,r2;
    try{
        const contenido =await models2.find({username: name}, {_id: 0, __v: 0});
        // const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =contenido;
        if(resultado.length==0){
            resultado[0]="Nombre especificado no existe en el archivo"
        }
    }
    catch(err){
        resultado= err;
    }
    return resultado[0];
}

async function leerProductos(ruta,data){
    let resultado,r2;
    try{
        const contenido =await models3.find({});
        resultado =contenido;
        r2=resultado;
        resultado=resultado[resultado.length-1].id+1;
        
    }
    catch(err){
        r2= [];
        resultado= 1;
    }
    return guardarProductos([resultado,r2],data,ruta);
    
}

async function guardarProductos(resultados,data,ruta){
    let id;
    let datos =data;
    datos.id= resultados[0];
    resultados[1].push(datos);
    try{
        // await fs.promises.writeFile(ruta, JSON.stringify(resultados[1],null, 2))
        await models3.create([datos]);
    }
    catch(err){
        console.log(err);
    }
    // return console.log(err);
    return ""+resultados[0];
} 

async function leerAllProductos(nombre){
    let resultado,resultado2,r2=[],id=[];
    try{
        
        const contenido =await models3.find({},{__v:0,_id:0});
        const contenido2 =await models3.distinct("id");
        // const contenido2 =await models.mensajes.find({});
        // const contenido =await fs.promises.readFile(nombre, 'utf8');
        resultado =contenido;
        resultado2 =contenido2;
        
        resultado.forEach((element, index) => {
            for (const [key, value] of Object.entries(element)) {
                if(value.id){
                   id.push(value.id);
                }
               
              }
            r2.push({
                id:id[index],
                nombre:element.nombre,
                foto:element.foto,
                precio:element.precio,
            })
        })

    }
    catch(err){
        resultado= err;
    }
    return r2;
    // return resultado;
    // return console.log(resultado);
}

module.exports = ContenedorMongoDb;