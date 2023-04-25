// let parrafo1 = document.getElementById("parrafo1");
// console.log(document.getElementsByClassName("parrafos")[0].children[0]);
// let etiquetas = document.getElementsByTagName("p");

// for(let parrafo of etiquetas){
//     console.log(parrafo);
// }
// let user ={
//     nombre :"Duvan"
// }
// let parrafoId = document.getElementById("parrafos");
// // remplazar texto o añadir texto depende si es (= ó +=) 
// parrafo1.innerText +=`Hola ${user.nombre}`;

// parrafoId.innerHTML += "<h1>HOLA CODERS</h1>";

class Persona {
    constructor(id,nombre, apellido, edad, dni){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni; 
    }
}


const persona1 = new Persona(1,"Francisco", "Pug",35, 121321);
const persona2 = new Persona(2,"Juan", "Pug", 22, 325423);
const persona3 = new Persona(3,"Carla", "Pug", 40, 435325);

const personas =[persona1, persona2, persona3];

let divpersonas = document.getElementById('divPersonas');

personas.forEach(personaEnArray => {
    divpersonas.innerHTML +=`
    <div id="${personaEnArray.id}"> 
       <img src="https://as01.epimg.net/diarioas/imagenes/2021/09/18/actualidad/1631953733_268263_1631953900_noticia_normal_recorte1.jpg">
       <p>Nombre: ${personaEnArray.nombre}</p>
       <p>Apellido: ${personaEnArray.apellido}</p>
       <p>Edad: ${personaEnArray.edad}</p>
       <p>Dni: ${personaEnArray.dni}</p>
    </div>`;
});