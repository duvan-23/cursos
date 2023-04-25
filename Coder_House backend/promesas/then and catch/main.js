const fs =require('fs');

fs.promises.readFile('./info.txt','utf-8')
    .then(contenido=>{
        console.log("consulta exitosa");

        const info =JSON.parse(contenido)
        console.log(info);
        const packageJsonObj = info.contenidoObj;
        packageJsonObj.author="CoderHouse";
        fs.promises.writeFile('./package.json.coder', JSON.stringify(info,null, 2))
        .then(()=>console.log("Escritura exitosa"))
        .catch(error=>{
            console.log(`error al escribir ${error}`);
        })
    })
    .catch(error=>console.log(`Error en la lectura${error}`))
