alert("Bienvenido al Cine de CODERHOUSE \n\nLugar de increibles peliculas");
let pelicula=0;
let seleccion=0;
let asientos=0;
let texto= "\n       Escoge la pelicula deseada \n\n1.Steve Jobs\n2.Red Social\n3.Matrix";
let texto2= "\n       Escoge el lugar de los asientos\n\n1.VIP ($100.000)\n2.Normal ($70.000)\n3.Economico ($50.000)";
let valorEntradas=0;
let valorTotal=0;
let CantidadPersonas=0;
let tipo="";
let tipoPelicula="";
let compra =[];
let cantidadComida=0;
let cuentaPagar=[];
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
            valorEntradas+=100000;
            tipo="VIP";
            break;
        case 2:
            valorEntradas+=70000;
            tipo="Normal";
            break; 
        case 3:
            valorEntradas+=50000;
            tipo="Economico";
            break; 
    }
    valorEntradas*=cantidad;
    cuentaPagar.push(valorEntradas);
}
compra.push(tipo);
let comida =confirm(`¿Desea comprar comida?`);

if(comida){
    do{
        cantidadComida=parseInt(prompt("¿cuantos combos desea?"));
    }while(isNaN(cantidadComida));
}
let combo=0;
for(let i=1; i<=cantidadComida;i++){
    do{
        combo = parseInt(prompt("            Combos de comida\n\n1.Gaseosa-papas($15000)\n2.Gaseosa-Hamburguesa($25000)\n3.Agua esalada($12000)\n4.Gaseosa-crispetas$($20000)"));
    }while(isNaN(combo));

    switch(combo){
        case 1:
            cuentaPagar.push(15000);
            break;
        case 2:
            cuentaPagar.push(25000);
            break;
        case 3:
            cuentaPagar.push(12000);
            break;
        case 4:
            cuentaPagar.push(20000);
            break;
    }
}
//Ordena los numeros del array
cuentaPagar.sort(function(a, b){return a - b});


for(let l=0; l< cuentaPagar.length; l++){
    valorTotal += cuentaPagar[l];
}

const persona = new comprador(
    prompt("Ingrese su numero de identificación"),
    prompt("Ingrese su nombre"),
    prompt("Ingrese su numero de telefono")
    );
let personaImprimir= document.getElementById("persona");
personaImprimir.innerHTML= `<h2>${persona.datos()}</h2>`;
personaImprimir.innerHTML+= `<h2>ha seleccionado la pelicula ${compra[1]}<br>Para ${compra[0]} personas<br>Asientos de tipo ${compra[2]}<br>Combos de comida ${cantidadComida}<br></h2>`;
let pago =confirm(`ha seleccionado la pelicula ${compra[1]}\nPara ${compra[0]} personas\nAsientos de tipo ${compra[2]}\nCombos de comida ${cantidadComida}\n\n            ¿Desea continuar con el pago?`);

if(pago){
    let recibo= document.getElementById("recibo");
    let recibo2= document.getElementById("recibo2");
    cuentaPagar.forEach(valor=>{
        recibo.innerHTML+= `<h2>$${valor}</h2>`;
    });
    recibo2.innerHTML+= `${valorTotal}`;
}




