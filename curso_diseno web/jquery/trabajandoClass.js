$(document).ready(function(){
    $('#boton').on('click',function(){
    //agregar clase
        // $(this).addClass('naranja');
    //quitar clase
        // $(this).removeClass('boton');
    //alternar clase,poner y quitar clase
        // $(this).toggleClass('naranja');
    // agregar efectos css
        $(this).css({
            'height':'100px',
            'width':'100px'
        });
    });
});