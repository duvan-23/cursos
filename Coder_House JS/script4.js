const persona1 ={
    nombre: "juan",
    apellido:"mendez",
    sueldo: 4000
}
const persona2 ={
    nombre: "david",
    apellido:"suarez",
    sueldo: 6000
}
const persona3 ={
    nombre: "arturo",
    apellido:"Celis",
    sueldo: 7000
}

const array1 =[persona1, persona2, persona3];

for(let persona of array1){
    console.log(persona);
//     for(let clave in persona){
//         console.log(persona[clave]);
//     }
 }

array1.forEach((persona)=> console.log(persona));// recorrer arrary
console.log(array1.find((persona)=> persona.nombre === "david" || persona.sueldo > 6000)); // FIND buscar y si lo encuentra devuelve el objeto, solo trae uno
console.log(array1.filter((persona)=> persona.nombre === "david" || persona.sueldo > 6000));//FILTER trae todos los que cumplan con la condicion 
console.log(array1.some((persona)=> persona.nombre === "david" || persona.sueldo > 6000));//SOME da true o false dependiendo si lo encuentra o no
console.log(array1.map((persona)=> persona.sueldo));// MAP devuelve un array solo con los datos seleccionados de los objetos , en este caso solo devuelve los sueldos de las personas
console.log(array1.map((persona)=> persona.sueldo>6000));// MAP si se hace con una condicion devuelve valores booleanos de si cada campo cumple la condicion o no.
const array2 = array1;
console.log(array2.sort(function(persona1,persona2) {
    if(persona1.nombre < persona2.nombre){
        return -1;
    }
    if(persona1.nombre > persona2.nombre){
        return 1;
    }
    return 0
}));// SORT  ordena alfabeticamente o numeros

console.log(Math.cbrt(8));
console.log(parseInt(Math.random() *10));

console.log()