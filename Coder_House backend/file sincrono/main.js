const fs =require('fs');

//-----------------------leer------------------------
// let data = fs.readFileSync('./text.txt','utf8');
// console.log(data);


//---------------------escribir o reescribir----------------------
// fs.writeFileSync('./text.txt','Hola, Bienvenido');

//---------------------agregar-----------------------
// fs.appendFileSync('./text.txt',' a Coderhouse');

//---------------------Eliminar archivo-------------
// fs.unlinkSync('./text.txt');

//---------------------Crear carpeta-------
fs.mkdirSync('./text.txt');