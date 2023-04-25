// const persona1 = { // Si el objeto es tipo const no deja cambiar llaves pero si valores
//     dni: "10.000.000",
//     nombre: "Francisco",
//     apellido:"Pugh",
//     edad: 50,
//     esProfesor: true
// }
// let persona2 = {// Si el objeto es tipo let o var deja cambiar llaves y valores
//     dni: "10.000.000",
//     nombre: "Francisco",
//     apellido:"Pugh",
//     edad: 50,
//     esProfesor: true
// }

// let persona3 = {
//     dni: "11.111.111",
//     nombre: "Pancha",
//     apellido:"Panchita",
//     edad: 40,
//     esProfesor: false,
//     domicilio: "calle falsa 123"
// }
// persona2= persona3;
// console.log(persona2);
// console.log(persona1.apellido);
// console.log(persona1["apellido"]);
// ---------------------------------------------------------------------------------------------
//---------------------------1---------------------------
// function Persona(dni, nombre, apellido, edad, esProfesor){// constructor de objetos, con esto ahorro tener que definir las llaves para todos los objetos
//     this.dni=dni;
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.esProfesor=esProfesor;
//     this.caminar= ()=> console.log(`${this.nombre} esta caminando`);//crea un metodo dentro una función  que mostrara el nombre del objeto que llame

// ------------------------2--------------------------   1 y 2 son iguales pero en el 2 el metodo va aparte y es mar organizado dentro de una clase, ademas de poder hacer herencia por clases 
class Persona{
    constructor(dni, nombre, apellido, edad, esProfesor){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.esProfesor=esProfesor;
    }

    caminar(){
        console.log(`${this.nombre} esta caminando`);
    }
    saltar(altura){
        console.log(`${this.nombre} debe saltar ${altura} metroas de altura`);
    }
}

const persona1 = new Persona(12345678,"Juanfer","Quintero",27, false);// creo un objeto de tipo persona
const persona2 = new Persona(89848576,"Fulanita","Felice",26, false);
const persona3 = new Persona(89848576,"Fulanita","Felice",26, false);

// const persona1 =new Persona(
//     parseInt(prompt("Ingrese dni")),
//     prompt("Ingrese nombre"),
//     prompt("Ingrese apellido"),
//     parseInt(prompt("Ingrese edad")),
//     Boolean(prompt("es profesor"))
// )
// console.log(persona1);
// persona1.caminar();

// console.log("Caminar".toUpperCase())    

const persona4 = new Persona(parseInt(prompt("Ingrese dni")),
    prompt("Ingrese nombre"),
    prompt("Ingrese apellido"),
    parseInt(prompt("Ingrese edad")),
    Boolean(prompt("es profesor"))
    );
persona4.caminar();
persona4.saltar(120);