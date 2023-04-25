// console.log(parseInt(Math.random()*20) +1);

const numeros = {}

function getAleatorios(){
    return parseInt(Math.random()*20) +1
}


for(let i=0; i <= 10000; i++){
    const numero =  getAleatorios();
    if(!numeros[numero]){
        numeros[numero]=0;
    }
    numeros[numero]++
}
//indica cuantas veces aparecio el numero en las 10000 repeticiones
console.log(numeros);