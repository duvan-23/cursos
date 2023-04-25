// let edad =18;
// // manera mas corta de hacer un if else, tiene un return por default
// const resultado = edad>18 ? alert("Es mayor de edad") : alert("Es menor de edad");

// el simbolo  ?? es igual que || pero depende el orden da una respuesta
// if (true ?? undefined){
//     console.log("V");
// }else{
//     console.log("F");
// }

// const persona1= {nombre:"pepe", apellido:"Perez"};
// //para evitar que muestre error si no encuentra la Propiedad, le muestra un valor dado despues del ||
// console.log(persona1?.name || "Propiedad no encontrada");

//desestructuracion de un objeto
// const persona = {nombre:"Pepe", apellido:"Perez", edad: 39};
// let {nombre, apellido, edad} =persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

//desestructuracion de un objeto
// class Persona {
//     constructor(nombre, apellido, edad, licencia){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.licencia = licencia;
//     }
// }
// const persona1 = new Persona("Francisco", "Pugh", 38, {tipo:"B2", fechaVencimiento:"12/03/08"});
// const persona2 = new Persona("Frank", "Pugh", 37, {tipo:"B2", fechaVencimiento:"12/03/08"});
// const persona3 = new Persona("Pepe", "Perez", 39, {tipo:"B2", fechaVencimiento:"12/03/08"});
// const persona4 = new Persona("Luciana", "luz", 40, {tipo:"B2", fechaVencimiento:"12/03/08"});

//copiar un objeto en uno nuevo y añadirle mas valores
// const persona5 ={
//     ...persona1,
//     domicilio: "Calle Falsa 123"
// }

// let personas = [persona1, persona2, persona3, persona4,[persona1,persona2]];
// let personas = [persona1, persona2, persona3, persona4, persona5];


//spread del array 
// console.log(...personas);

// let [,,c,d,[aa,bb]] = personas;

// console.log(c);
// console.log(d);
// console.log(aa);
// console.log(bb);

//ponerle un alias de la variable para llamarla diferente de como se declaro en el objeto nombre: alias
// let{licencia :licenciaDeConducir} = persona1;
// console.log(licenciaDeConducir);

//desestructurar dentro de una funcion 
// function desestructurar({nombre :no, apellido: ap, edad, licencia}){
//     console.log(no);
//     console.log(ap);
//     console.log(edad);
//     console.log(licencia);
// }

// desestructurar(persona1);


//simplificar con spread, puedo ingresar todos los numeros que quiera y luego los sumo con reduce()
function sumar(...numeros){
    return  numeros
// console.log(numeros.reduce((num1, num2) => num1+ num2, 0));
}

let array = sumar(5,10,15);
console.log(array);