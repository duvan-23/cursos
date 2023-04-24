$(document).ready(function(){
    // $('#titulo').text('Encabezado Modificado');

    $('#titulo').html('<u>Encabezado Modificado</u>');

    var nombre =$('#nombre');
    nombre.on('change',function(){
        $('#titulo').text(nombre.val());
    });

    // $('#enlace').text('FalconMasters.com');
    // $('#enlace').attr('href','http://www.falconmasters.com');

    $('#enlace').attr({
        'class':'azul',
        'target':'_blank'
    });
});