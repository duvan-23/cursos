const fs =require('fs');

//-----------------------leer------------------------
// let data = fs.readFile('./text.txt','utf-8',(error, contenido)=>{
//     if(error){
//         console.log('error al leer archivo: ',+error);
//     }else{
//         console.log(contenido);
//     }
// });



//---------------------escribir o reescribir----------------------
// fs.writeFile('./text.txt','Hola, Bienvenido', error=>{
//     if(error){
//         console.log('error al escribir archivo: ',+error);
//     }else{
//         console.log('se escribio con exito');
//     }
// });

//---------------------agregar-----------------------
// fs.appendFile('./text.txt',' a Coderhouse', error=>{
//         if(error){
//             console.log('error al agregar en el archivo: ',+error);
//         }else{
//             console.log('se agrego con exito');
//         }
//     });

//---------------------Eliminar archivo-------------
// fs.unlink('./text.txt',error=>{
//         if(error){
//             console.log('error al Eliminar el archivo: ',+error);
//         }else{
//             console.log('se elimino con exito');
//         }
//     });

//---------------------Crear carpeta-------
fs.mkdir('./texto',error=>{
        if(error){
            console.log('error al crear carpeta: ',+error);
        }else{
            console.log('se creo con exito');
        }
    });