// let array = [];
// let array2 =["Hola", 5, true, "Chao"];
// console.log(array2);
// console.log(array2[2]);

// for(i=0;i<array2.length;i++){
//     console.log(array2[i]);
// }
//añadir un valor al final del array
// array2.push({nombre:"Lionel", apellido:"Messi"});

//añadir un valor al comienzo del array
// array2.unshift({nombre:"Lionel", apellido:"Messi"});
// console.log(array2);

//borra el primer elemento del array
// array2.shift();

//borra el ultimo elemento del array
// array2.pop();

//Splice, recibe dos parametros, el primero la posicion y la seguda cuantos elementos va a eliminar
// array2.splice(1,3);


//Join,pasa todos los elementos a string y los junta mediante un separador que en este caso es ,
// console.log(array2.join(","));



// let array1 =["Pez", "Perrro"];
// let array2 =["Gato", "Conejo"];
 //concat para contatenar dos vectores
// let array3 = array1.concat(array2);
// console.log(array3);
// Slice realiza una copia de elementos donde pide posicion de inicio y cantida de elementos
// let array4 = array3.slice(1,3);//, copia valor 1 y 2, el 3 no lo toma
// console.log(array4);

// let array1 = ["Pedro","Agustina","Maria","Walter","Raul"];
// devuelve el valor del indice del valor indicado, busca dentro del vector y devuelve la posicion.
// let indice = array1.indexOf("Maria");


//valida si el valor esta y devuelve valor boolean 
// console.log(array1.includes("Pedros"));

//le da vuelta al array
// console.log(array1.reverse());

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 13);
const persona2 = new Persona("Gonzalo", "Isa", 22);
const persona3 = new Persona("Mario", "Manssonat", 21);

let arrayPersonas = [persona1,persona2,persona3];

for(let i=0; i<arrayPersonas.length; i++){
    console.log(i);
}

for(let personaEnArray of arrayPersonas){
    console.log(personaEnArray);
}
// console.log(personaEnArray);