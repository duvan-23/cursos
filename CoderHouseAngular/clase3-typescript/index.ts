
let mensaje1:string ="Hola Mundo! :)";
const mensaje2:string="Esta es una constante";
let mensaje3:string = mensaje1 +" "+mensaje2;
let n1:number = 3;
let n2:number = 2.5;
let n3:number = n1*n2;
let booleanos:boolean = false;
enum opciones {
    Si=1,
    No= 2
};
function imprimirMensajes(){
    console.log("Mensaje 1: " , mensaje1);
    console.log("Mensaje 2: " , mensaje2);
    console.log("Mensaje 3: " , mensaje3);
    console.log("Numero 1: ",n1);
    console.log("Numero 2: ",n2);
    console.log("Numero 3: ",n3);
    console.log("Booleano: ",booleanos);
    console.log("Enum: ",opciones);
}

imprimirMensajes();

//tsc index.ts   genera index.js

//tsc index.ts --outFile rutacarpeta   para que transpile el documento a js y lo guarde en esa ruta ej: tsc index.ts --outFile ./dist/out.js