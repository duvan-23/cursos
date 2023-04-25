



// let boton1= document.getElementById("boton1");
// let valor;
// let inputColor = document.getElementById("inputColor");
// boton1.addEventListener('click',()=>{
//     let input1 = document.getElementById("input1");
//     valor= input1.value;
//     console.log(valor);
// })

// boton1.onclick= () => console.log("Dio Click con funcion onclick");


// input1.addEventListener('input',(r)=>{
//     console.log(r.target.value);
// })
// inputColor.addEventListener('input',(e)=>{
//     console.log(e.target.value);//InputColor.value
//     document.body.style.backgroundColor = e.target.value;
// })
// input1.addEventListener('change',(e)=>{
//     console.log("hola");
// })

class Auto{
    constructor(modelo, marca, precio){
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
}
const auto1= new Auto("X","Tesla", 20000);
const auto2= new Auto("T","Ford", 5000);
const auto3= new Auto("Clio","Renault", 800);
const auto4= new Auto("Mustang","Ford", 15000);

let autos =[auto1, auto2, auto3, auto4];
let botonAutos = document.getElementById("botonAutos");
let divAutos= document.getElementById("divAutos");

botonAutos.addEventListener('click', ()=>{
    autos.forEach((auto, indice) =>{
        divAutos.innerHTML += `
        <div class="card"  id="auto${indice}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Modelo: ${auto.modelo}</h5>
                <p class="card-text">Marca: ${auto.marca}</p>
                <p class="card-text">Precio: $${auto.precio}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
    })
})

let formPersona = document.getElementById("idForm");
formPersona.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inputNombre = document.getElementById("nombreForm");
    let inputApellido = document.getElementById("apellidoForm");
    console.log(inputNombre.value);
    console.log(inputApellido.value);
})

//change, click, onclick, input submit   desafio