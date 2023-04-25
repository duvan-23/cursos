alert();

// const form = document.querySelector('form');
// form.addEventListener('submit', e => {
//     e.preventDefault()

//     const data = {title: form[0].value, price: form[1].value, thumbnail: form[2].value}
//     const data1 = {palabra: "ccc"};
//     //console.log(data)

//     fetch('/api/palabras', {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify(data1)
//     })
//     .then(respuesta => respuesta.json())
//     .then( productos => {
//         //console.log(productos)
//         //document.getElementById('datos').innerHTML = data2Table(productos)
//         form.reset()
//         // socket.emit('update', 'ok');         
//     })
//     .catch(error => console.error(error))
// })