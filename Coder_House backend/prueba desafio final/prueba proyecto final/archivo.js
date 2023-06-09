const fs =require('fs');

class Contenedor{
   
    constructor(nombre){
        this.nombre = nombre;
    }
    
    async save(data){
        let ruta =`./${this.nombre}`;
        return await leerTodo(ruta,data);
    }
    async getAll(){
        let ruta =`./${this.nombre}`;
        return await leerAll(ruta);
    }
    async getById(id){
        return await leerId(id);
    }
    async deleteById(id){
        let ruta =`./${this.nombre}`;
        return await eliminarId(id,ruta);
    }
    async putId(id,datos){
        let ruta =`./${this.nombre}`;
        return await actualizar(id,ruta,datos);
    }
}

async function leerAll(ruta){
    let resultado,r2;
    try{
        const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =JSON.parse(contenido);
    }
    catch(err){
        resultado= err;
    }
    return resultado;
}

async function leerId(id){
    let resultado,r2;
    try{
        const contenido =await fs.promises.readFile('./productos.txt', 'utf8');
        resultado =JSON.parse(contenido);
        r2=Math.floor(Math.random() * resultado.length) + 1;
        resultado.forEach(object =>{
            if(object.id === id){
                resultado=object;
            }
        });
        if(resultado.length>0){
            resultado="Id especificado no existe en el archivo"
        }
    }
    catch(err){
        resultado= err;
    }
    return resultado;
}

async function leerTodo(ruta,data){
    let resultado,r2;
    try{
        const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =JSON.parse(contenido);
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
        await fs.promises.writeFile(ruta, JSON.stringify(resultados[1],null, 2))
    }
    catch(err){
        console.log(err);
    }
}  


async function eliminarId(id,ruta){
    let resultado,r2;
    try{
        const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =JSON.parse(contenido);
        resultado.forEach((object,index) =>{
            if(object.id == id){
                r2=index;
            }
        });

        resultado.splice(r2,1);
    }
    catch(err){
        resultado= err;
    }
    return guardar1(resultado,ruta);
}
async function guardar1(resultado,ruta){
    try{
        await fs.promises.writeFile(ruta, JSON.stringify(resultado,null, 2))
        console.log("Elimino");
    }
    catch(err){
        console.log(err);
    }
}

async function actualizar(id,ruta,datos){
    let resultado2,r3;
    try{
        const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado2 =JSON.parse(contenido);
        resultado2.forEach((object,index) =>{
            if(object.id === Number(id)){
                r3=index;
            }
        });
        resultado2.splice(r3,1,datos);
    }
    catch(err){
        resultado2= err;
    }
    return actualizar2(resultado2,ruta);
}
async function actualizar2(resultado2,ruta){
    try{
        await fs.promises.writeFile(ruta, JSON.stringify(resultado2,null, 2))
        console.log("Actualizar");
    }
    catch(err){
        console.log(err);
    }
}
exports.Contenedor = Contenedor;