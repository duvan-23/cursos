const fs =require('fs');

fs.readFile('./package.json','utf-8',(error, data)=>{
    if(error){
        console.log('error al leer archivo: ',+error);
        throw new Error('error al leer archivo: ',+error);
    }
    console.log("consulta exitosa:",+data);

    const info ={
        contenidoStr : data,
        contenidoObj : JSON.parse(data),
        size : data.length
    }
    console.log(info);
    fs.writeFile('./info.txt', JSON.stringify(info,null, 2), error=>{
        if(error){
            console.log('error al escribir archivo: ',+error);
            throw new Error('error al escribir archivo: ',+error);
        }
        console.log('se escribio con exito',+info);
    
    });
});