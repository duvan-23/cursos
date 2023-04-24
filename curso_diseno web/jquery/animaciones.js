$(document).ready(function(){
    //$(selector).animate({parametros},velocidad,callback);
    $('#boton').on('click',function(){
        $('#caja').animate({
            // width:'300px',
            // opacity:'0.2'

            // width:'+=300px'
            marginLeft:'+=50px'

        },300,function(){
            // alert('fin de la animacion');
        });

        // $('#caja').toggleClass('animacion');

        $('#caja').animate({
            marginLeft:'-=50px'
        },300);
    });
});