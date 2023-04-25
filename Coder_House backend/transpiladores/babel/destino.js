"use strict";

// npm init -y
// npm install @babel/core @babel/cli @babel/preset-env
//"scripts": {"build":"babel ./origen.js -o ./destino.js -w", anññadir en package.json
//em6(origen.js) a em5(destino.js)
var lista1 = [2, 3, 5, 7];
lista1.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
