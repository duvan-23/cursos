let operaciones,tipo, valor;
do{
    operaciones=parseInt(prompt("                                   Convertidor de monedas\n \n En este programa podra realizar cambios de moneda\n¿Cuantos cambios de moneda desea realizar?\n(para continuar debe ingresar un valor numerico)"));
}while(isNaN(operaciones));
for(i=1; i<=operaciones; i++){
    tipo=parseInt(prompt("Seleccione un numero dependiendo de lo que desea convertir \n1.Pesos a Dolares\n2.Pesos a Euros\n3.Pesos a Yen Japones"));
    if(tipo===1 || tipo===2 || tipo===3){
        valor=parseFloat(prompt("Ingrese el valor a convertir operacion No "+i));
        switch(tipo){
            case 1:
                console.log(i+".  $"+ valor +" pesos son: $"+(0.000258*valor).toFixed(2)+" Dolares");
                break;
            case 2:
                console.log(i+".  $"+ valor +" pesos son: €"+(0.0002253*valor).toFixed(2)+" Euros");
                break;
            case 3:
                console.log(i+".  $"+ valor +" pesos son: ¥"+(0.0296244*valor).toFixed(2)+" Yenes Japoneses");
                break;
        }
    }
    else{
        console.log("Debe ingresar un numero valido");
        break;
    }
}

