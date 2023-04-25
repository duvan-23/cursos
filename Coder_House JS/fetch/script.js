let divDolar = document.getElementById('divDolar');

fetch("https://criptoya.com/api/dolar")
.then(response=>response.json())
.then(data=>{
    let {blue, ccb, ccl, oficial, mep, solidario} = data;
    divDolar.innerHTML=`
        <p>Oficial: $${oficial}</p>
        <p>solidiario: $${solidario}</p>
        <p>mep: $${mep}</p>
        <p>ccl: $${ccl}</p>
        <p>ccb: $${ccb}</p>
        <p>blue: $${blue}</p>
    `;
})

fetch('productos.txt')
.then(response=>response.json())
.then(clientes=>{
    console.log(clientes);
})
