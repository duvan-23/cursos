$(document).ready(function(){
// Efecto Menu
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            'top': '0'
        },2000 +(index * 500));
    });

//Efecto Header
    if($(window).width()>800){
        $('header .textos').css({
            opacity:0,
            marginTop:200
            // marginLeft:'680px'
        });
        $('header .textos').animate({
            opacity:1,
            marginTop:'-110px',
        },1500);
    }


//Scroll Elementos Menu
    var acercaDe=$('#acerca-de').offset().top,
        ebook=$('#ebook').offset().top,
        galeria=$('#galeria').offset().top;
        // ubicacion=$('#ubicacion').offset().top;
    $('#btn-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            // scrollTop:380
            scrollTop:acercaDe-310
        },500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            // scrollTop:380
            scrollTop:ebook + 410
        },500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            // scrollTop:380
            scrollTop:galeria
        },500);
    });

    // $('#btn-ubicacion').on('click',function(e){
    //     e.preventDefault();
    //     $('html,body').animate({
    //         // scrollTop:380
    //         scrollTop:ubicacion
    //     },500);
    // });

    // --------------------modal------------------
    function showPopup(){
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    $(".btn-abrir").click(showPopup);

    // setTimeout(showPopup, 2000);

});