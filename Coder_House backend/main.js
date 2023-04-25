
// const user = {name: "Juan"};
// user.name = "manolo"; // si se puede cambiar un atributo dentro de una costante

// console.log(user.name);

let nombre= "duvan";
let edad=25;
let precio= "$99.90";
let series=["Dark","Mr Robot", "Castlevenia"];

let peliculas = [
    {
        nombre:"Thor", año:"2015", protagonistas:["robert", "juan"]
    
    },
    {
        nombre:"Iron", año:"2019", protagonistas:["claudia","david"]
    }
];

console.log(nombre);
console.log(edad);
console.log(precio);

series.forEach(element => {
    console.log(element);
});
peliculas.forEach(element => {
    console.log(element.nombre);
    console.log(element.año);
    element.protagonistas.forEach(element => {
        console.log(element);
    });
});

edad ++;
console.log(edad);

series.push("MoonKnight");
console.log(series);
