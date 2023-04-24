$(document).ready(function(){
    var titulo=$('#titulo');
    var info=$('#info');
//Calcula el ancho del elemento
    info.append('Ancho: '+titulo.width()+'<br/>');
//Calcula el ancho del elemento + el padding
    info.append('Ancho interno: '+titulo.innerWidth()+'<br/>');

//Calcula el ancho del elemento + el padding + el borde
    info.append('Ancho Externo: '+titulo.outerWidth()+'<br/>');

//Calcula el ancho del elemento + el padding + el borde+margin
    info.append('Ancho Externo: '+titulo.outerWidth(true)+'<br/>');

//-------------
//Calcula el alto del elemento
    info.append('Alto: '+titulo.height()+'<br/>');

//Calcula el ancho del elemento + el padding
    info.append('Alto interno: '+titulo.innerHeight()+'<br/>');

//Calcula el ancho del elemento + el padding + el borde
    info.append('Alto Externo: '+titulo.outerHeight()+'<br/>');

//Calcula el ancho del elemento + el padding + el borde+margin
    info.append('Alto Externo: '+titulo.outerHeight(true)+'<br/>');

});