"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var usuario_1 = require("./usuario");
var persona1 = new persona_1.Persona("Pablo", "Lago", 15);
// persona1.agregarNombre( "Pablo");
// persona1.agregarApellido ("Lago");
// persona1.agregarEdad(5);
console.log(persona1.obtenerNombre(), persona1.obtenerApellido(), persona1.obtenerEdad());
var usuario1 = new usuario_1.Usuario("Mariano", "Oblitas", 26, "mariano@gmail.com", "asd.123");
console.log(usuario1.obtenerNombre());
console.log(usuario1.inscribir());
var fecha = new Date();
console.log("Fecha: ", fecha);
//tsc demo-objetos.ts
