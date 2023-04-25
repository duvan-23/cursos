const fs =require('fs');

try{
    fs.writeFileSync('./text.txt',new Date().toLocaleString());
}catch (err){
    throw new Error ('Error en la escritura'+err);
}

try{
    const fecha=fs.readFileSync('./text.txt', 'utf-8');
    console.log(fecha);
}catch (err){
    throw new Error ('Error en la lectura',+err);
}