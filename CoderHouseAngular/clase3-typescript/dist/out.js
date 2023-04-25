var mensaje1 = "Hola Mundo! :)";
var mensaje2 = "Esta es una constante";
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
console.log("Mensaje 1: ", mensaje1);
console.log("Mensaje 2: ", mensaje2);
console.log("Mensaje 3: ", mensaje3);
console.log("Numero 1: ", n1);
console.log("Numero 2: ", n2);
console.log("Numero 3: ", n3);
//tsc index.ts   genera index.js
//tsc index.ts --outFile rutacarpeta   para que transpile el documento a js y lo guarde en esa ruta ej: tsc index.ts --outFile ./dist/out.js
