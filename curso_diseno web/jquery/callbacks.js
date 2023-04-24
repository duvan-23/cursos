$(document).ready(function(){
// con callbacks
    $('#ejecutar').on('click',function(){
        $('.caja').slideUp(1000,function(){
            $(this).slideDown(1000);
        });
    });

//sin callbacks
    // $('#ejecutar').on('click',function(){
    //     $('.caja').slideUp(300);
    //     alert('Animacion Iniciada')
    //     $('.caja').slideDown(300);
    // });
});