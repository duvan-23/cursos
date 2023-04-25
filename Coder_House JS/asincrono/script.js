// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esperando");
// }, 3000);

// console.log("Fin");

// for(let i of "Mundo"){
//     console.log(i);
// }

// setInterval(() => {
//     // console.log("Contar");
// }, 3000);

// const probarPromesa= (val)=>{
//     return new Promise((res, rej)=>{
//         if(val=== true){
//             res("Promesa afirmativa");
//         }else{
//             rej("Promesa no cumplida");
//         }
//     })
// }

// console.log(probarPromesa(true));
// console.log(probarPromesa(false));

//--------------------------------------------
// const probarPromesa= (val)=>{
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             val ? res("Promesa afirmativa") : rej("Promesa no cumplida");
//             }, 3000);
//     })
// }

// console.log(probarPromesa(true));
// console.log(probarPromesa(false));

let array = [
    {nombre:"Francisco", apellido:"Pug"},
    {nombre:"German", apellido:"Cuevas"},
    {nombre:"Lucila", apellido:"Fortunato"},
];

const peditInfo =() =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(array);
        },3000)
    })
}
console.log(peditInfo());