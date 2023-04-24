var cajas=document.getElementsByTagName('div');
// var cajas=document.getElementsByClassName('caja');
var primeraCaja=document.getElementById('primeraCaja');

// cajas[0].textContent='Hola Mundo';
// primeraCaja.innerHTML ='<u>Hola Mundo</u>';

// ---- Creando Nodos
//1.crear el elemento
var caja=document.createElement('div');
//2.crear un nodo de texto
var contenido=document.createTextNode('Hola Mundo');
//3.añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4.agregar atributos a los caja 
// caja.setAttribute('class','caja naranja');
//5.agregar el elemento al documento
// var contenedor=document.getElementById('contenedor');
// contenedor.appendChild(caja);

//------Modificando la clase o id de un elemento
caja.id='primera';
caja.className='caja naranja';

// ------conociendo el elemento padre
var padre= cajas[0].parentNode;
//           (caja a insertar , id de la primera caja)    insertar antes de esta caja
// padre.insertBefore(caja,primeraCaja);
// padre.insertBefore(caja,cajas[2]);

padre.replaceChild(caja,cajas[0]);
padre.removeChild(cajas[3]);