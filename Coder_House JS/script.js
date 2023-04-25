//let=variable global 
// var nombre = "Francisco";
// var edad = 40;

//let= variable local y no deja volver 
//a declarar una variable con el mismo
//nombre de una variable ya declarada, con var lo permite hacer
// let nombre1 = "Raul";// Mejor usar let
// nombre = "miguel";

// let dolar = Number(prompt("Ingrese valor"));
// const IVA = 1.21;

// console.log(edad*IVA);
// console.log(nombre);
// document.write("<p>"+nombre+"</p>");
// document.write("<p>"+(dolar+5)+" es estudiante"+"</p>");

// alert("hola")


// function mostrarNombre(nombre){
//     console.log(`El profe es ${nombre}`)
// }

// mostrarNombre("messi");
// let resultado = 0;
// function suma(numero1,numero2){
//     return numero1+numero2;
// }

// let numero1=parseFloat(prompt("Ingrese un numero"));
// let numero2=parseFloat(prompt("Ingrese otro numero"));

// resultado = suma(numero1,numero2);
// console.log(resultado);



// const IVA =1.21
// function calculoIVA(producto){
//     return producto * IVA;
// }
// console.log(calculoIVA(100));


//Funcion anonimas-- (funcion sin nombre)

// const suma = function(num1, num2){ return num1 + num2};
// const resta = function(num1, num2){ return num1 - num2};
// const division = function(num1, num2){ return num1 / num2};
// const multiplicacion= function(num1, num2){ return num1 * num2};


// const suma1 = (num1, num2)=> { // si es mas de una linea, se debe poner con {}
//     // y con return
//     return num1 + num2;   
// };
// const resta1 = (num1, num2)=> num1 - num2;
// const division1 = (num1, num2)=> num1 / num2;
// const multiplicacion1= (num1, num2)=> num1 * num2;


// console.log(suma(5,10));
// console.log(resta(5,10));
// console.log(division(5,10));
// console.log(multiplicacion(5,10));


// console.log(suma1(5,10));
// console.log(resta1(5,10));
// console.log(division1(5,10));
// console.log(multiplicacion1(5,10));

let edad=parseInt(prompt("Ingrese edad"));
let año=parseInt(prompt("Ingrese año actual"));

const fechaNacimiento = (edad,año)=> año -edad;

console.log("Si este año no ha cumplio años su fecha de nacimiento es: "
+(fechaNacimiento(edad,año)-1));
console.log("Si este año ya cumplido años su fecha de nacimiento es: "
+fechaNacimiento(edad,año));