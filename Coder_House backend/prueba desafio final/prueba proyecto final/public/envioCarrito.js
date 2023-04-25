const form1 = document.getElementById('form_carrito');
form1.addEventListener('submit', e => {
    e.preventDefault();
    let id=document.getElementById('id').value;
    const data ={
        id: id
    };
    fetch('/api/carrito', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    let myBool = (document.getElementById('admin2').value === 'false');
    if(myBool){
        alert("¡No tiene permisos de Administrador para Agregar productos al carrito!");
    }
    setTimeout(() => {
        window.location.reload()
    }, 1000);
})


const botonesEliminarc=document.querySelectorAll(".botones-eliminarc");
botonesEliminarc.forEach((boton, indice) => {
	boton.addEventListener('click',()=>{
        let id=document.getElementById(`valor${indice+1}`).value;
        fetch(`/api/carrito/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        let myBool = (document.getElementById('admin2').value === 'false');
        if(myBool){
            alert("¡No tiene permisos de Administrador para Eliminar productos del carrito!");
        }
        window.location.reload();
    });
});


const botonesEditarc=document.querySelectorAll(".botones-editarc");
botonesEditarc.forEach((boton, indice) => {
	boton.addEventListener('click',()=>{
        let id=document.getElementById(`valor${indice+1}`).value;
        let idproducto=document.getElementById(`valorp${indice+1}`).value;

        Swal.fire({
            title: 'Editar Producto',
            html: `<div class="form-group"><label for="campo1">ID Producto:</label><input type="text" id="campo1" class="swal2-input" placeholder="Nombre" value="${idproducto}"></div>`,
            confirmButtonText: 'Actualizar',
            showCancelButton: true,
            focusConfirm: false,
          }).then((result) => {
              if(result.isConfirmed){
                const data ={
                    idProducto:Swal.getPopup().querySelector('#campo1').value
                }
                fetch(`/api/carrito/${id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify(data)
                })
                let myBool = (document.getElementById('admin2').value === 'false');
                if(myBool){
                    alert("¡No tiene permisos de Administrador para Editar productos del carrito!");
                }
                setTimeout(() => {
                    window.location.reload()
                }, 600);
              }
            
          })
        
    });
});