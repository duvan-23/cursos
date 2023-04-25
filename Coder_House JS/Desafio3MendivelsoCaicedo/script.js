alert("Bienvenido al Cine de CODERHOUSE \n\nLugar de increibles peliculas");
let pelicula=0;
let seleccion=0;
let asientos=0;
let texto= "\n       Escoge la pelicula deseada \n\n1.Steve Jobs\n2.Red Social\n3.Matrix";
let texto2= "\n       Escoge el lugar de los asientos\n\n1.VIP ($100.000)\n2.Normal ($70.000)\n3.Economico ($50.000)";
let valorTotal=0;
let CantidadPersonas=0;
let tipo="";
let tipoPelicula="";
let compra =[];
validar(texto,1);
validar(texto2,2);

class comprador{
    constructor(id, nombre, telefono){
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    datos(){
        return this.nombre + " identificad@ con el numero "+this.id;
    }
}
do{
    CantidadPersonas=parseInt(prompt("¿cuantos asientos desea?"));
}while(isNaN(CantidadPersonas));

precio(CantidadPersonas,seleccion);
compra.push(CantidadPersonas);
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
compra.push(tipoPelicula);
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
compra.push(tipo);
const persona = new comprador(
    prompt("Ingrese su numero de identificación"),
    prompt("Ingrese su nombre"),
    prompt("Ingrese su numero de telefono")
    );

let pago =confirm(`${persona.datos()} \n\nha seleccionado la pelicula ${compra[1]}\nPara ${compra[0]} personas\nAsientos de tipo ${compra[2]}\n\n            ¿Desea continuar con el pago?`);

if(pago){
    alert(`Gracias por su compra el valor a pagar es $${valorTotal}`);
}




