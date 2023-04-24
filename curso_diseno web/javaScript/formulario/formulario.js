(function(){
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
        error = document.getElementById('error');
        let is_valid = true;
    function validarNombre(e){
        if (is_valid) {
            if(nombre.value==''|| nombre.value==null ){
            console.log('Por favor completa el nombre');
            error.style.display='block';
            //   error.innerHTML=error.innerHTML +'<li>Por favor completa el nombre</li>'   es lo mismo que lo siguiente:
            error.innerHTML +='<li>Por favor completa el nombre</li>'
            e.preventDefault();
            is_valid = false;
            }else{
             error.style.display='none';
            }
        }
    }  
    function validarCorreo(e){
        if (is_valid) {
            if(correo.value==''|| correo.value==null ){
              console.log('Por favor completa el correo');
              error.style.display='block';
            //   error.innerHTML=error.innerHTML +'<li>Por favor completa el nombre</li>'   es lo mismo que lo siguiente:
              error.innerHTML +='<li>Por favor completa el correo</li>'
              e.preventDefault();
              is_valid = false;
            }else{
                error.style.display='none';
            }
        }
    }  
    function validarSexo(e){
        if (is_valid) {
            if(sexo.value==''|| sexo.value==null ){
                console.log('Por favor completa el sexo');
                error.style.display='block';
            //   error.innerHTML=error.innerHTML +'<li>Por favor completa el nombre</li>'   es lo mismo que lo siguiente:
                error.innerHTML +='<li>Por favor completa el sexo</li>'
                e.preventDefault();
                is_valid = false;
            }else{
                error.style.display='none';
            }
        }
    } 
    function validarTerminos(e){
        if (is_valid) {
            if(terminos.checked==false){
                console.log('Por favor acepta terminos');
                error.style.display='block';
            //   error.innerHTML=error.innerHTML +'<li>Por favor completa el nombre</li>'   es lo mismo que lo siguiente:
                error.innerHTML +='<li>Por favor acepta terminos</li>'
                e.preventDefault();
                is_valid = false;
            }else{
                error.style.display='none';
            }
        }
    } 
    
    function validarFormulario(e){
        error.innerHTML='';
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
        is_valid = true;
    } 
    formulario.addEventListener('submit',validarFormulario);
    
}())