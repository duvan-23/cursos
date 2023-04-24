$(document).ready(function(){
    var boton=$('#boton');
    // boton.click(function(){
    //     alert("hola");
    // });
//Evento con funcion
    function saludo(){
        alert('Saludos')
    }

    // boton.click(salud);
    // boton.on('click',saludo);
//Evento con fallback 
    // boton.on('mouseenter',function(){
    //     document.body.style.background='#000';
    // });
    // boton.on('mouseleave',function(){
    //     document.body.style.background='#fff';
    // });

//Eliminando Eventos
    // boton.on('click',function(){
    //     alert('Saludos');
    //     console.log('Saludos');
    // });
    // $('#desactivar').on('click',function(){
    //     boton.off('click');
    //     console.log('Boton ejecutar desactivado');
    // });

//previniendo el comportamiento de los enlaces 
    $('a').on('click',function(e){
        e.preventDefault();
        alert('Link Desacativado');
    });
});