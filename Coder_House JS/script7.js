//localStorage, permanece 
// localStorage.setItem('Saludar', 'Hola');
// localStorage.setItem('Despedirse', 'Adios');
//SessionStorage, se borra cuando se le da reiniciar a la pagina o salir
// SessionStorage.setItem('Saludar', 'Hola');


// let valorLocalStorage = localStorage.getItem('Saludar');
// console.log(valorLocalStorage);

// for(let i =0; i< localStorage.length; i++){
//     let clave = localStorage.key(i);
//     console.log(clave);
//     console.log(localStorage.getItem(clave));
// }


//Eliminar uno o todos los elementos del local storage
// localStorage.removeItem('Saludar');
// localStorage.clear();



class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

// const persona1 = new Persona("Yoelys", "Figueredo", 22);
// const persona2 = new Persona("Lucila", "Fortunato", 22);
// let personas =  [persona1,persona2];

let arrayPersonas =[];
localStorage.setItem('Personas', JSON.stringify(arrayPersonas));
let formPersona = document.getElementById('formPersona');
let botonPersona= document.getElementById('botonPersonas');
let divPersonas= document.getElementById('divPersonas');
formPersona.addEventListener('submit', (e) =>{
    e.preventDefault();
    let dataForm = new FormData(e.target);
    // console.log(dataForm.get('nombre'));// document.getElementByID
    const persona = new Persona(dataForm.get('nombre'),dataForm.get('apellido'),dataForm.get('edad'));
    arrayPersonas.push(persona);
    localStorage.setItem('Personas', JSON.stringify(arrayPersonas));//.stringify es para enviar los datos en localstorage si es tipo objeto
    formPersona.reset();
}
)
botonPersona.addEventListener('click', () =>{
    let personasDeStorage = JSON.parse(localStorage.getItem('Personas'));//.parse para tomar los datos del loacalstorage
    personasDeStorage.forEach(persona =>{
        divPersonas.innerHTML += `
            <p>${persona.nombre}</p>
            <p>${persona.apellido}</p>
            <p>${persona.edad}</p>
        `
    })
})
let personasParse = JSON.parse(localStorage.getItem('Personas'));
console.log(personasParse);



// para no sobreescribir en local storage, si exite en el local storage lo guardo en el array, si no, lo creo
// if(localStorage.getItem('Personas')){
//     personasDeStorage = JSON.parse(localStorage.getItem('Personas'));
// }else{
//     localStorage.setItem('Personas', JSON.stringify(arrayPersonas));
// }


// let datForm = new FormData(e.target);// FormData es para traer datos de un formulario, para remplazar llamar por id
// console.log(datForm.get('user'));
// console.log(datForm.get('email'));
// console.log(datForm.get('password'));

// .some()// para buscar si un usuario ya existe en el array