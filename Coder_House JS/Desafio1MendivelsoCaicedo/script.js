alert("Bienvenido al Cine de CODERHOUSE \n\nLugar de increibles peliculas");
let pelicula=0;
let seleccion=0;
let asientos=0;
let texto= "\n       Escoge la pelicula deseada \n\n1.Steve Jobs\n2.Red Social\n3.Matrix";
let texto2= "\n       Escoge lugar de los \n\n1.VIP\n2.Normal\n3.Economico";
let valorTotal=0;
let CantidadPersonas=0;
let tipo="";
let tipoPelicula="";
validar(texto,1);
validar(texto2,2);
do{
    CantidadPersonas=parseInt(prompt("¿cuantos asientos desea?"));
}while(isNaN(CantidadPersonas));

precio(CantidadPersonas,seleccion);

function validar(valor,indice){
    do{
        seleccion=parseInt(prompt(valor));
        if(indice===1){
            pelicula=seleccion;
            if(pelicula==1){
                tipoPelicula="Steve Jobs";
            }else if(pelicula==2){
                tipoPelicula="Red Social";
            }else{
                tipoPelicula="Matrix";
            }
        }
        
    }while(isNaN(seleccion) || (seleccion <1 || seleccion >3));
}
function precio(cantidad,tipo1){
    switch(tipo1){
        case 1:
            valorTotal+=100000;
            tipo="VIP";
            break;
        case 2:
            valorTotal+=70000;
            tipo="Normal";
            break; 
        case 3:
            valorTotal+=50000;
            tipo="Economico";
            break; 
    }
    valorTotal*=cantidad;
}

let pago =confirm(`Ha seleccionado la pelicula ${tipoPelicula}\nPara ${CantidadPersonas} personas\nAsientos de tipo ${tipo}\n\n            ¿Desea continuar con el pago?`);

if(pago){
    alert(`Gracias por su compra el valor a pagar es $${valorTotal}`);
}




