// const mostrar = (a, b) =>{
//     console.log("suma=" + (a+b));
// }
// mostrar(3,2);



function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) =>{
        if(divisor==0){
            reject("no se puede dividir");
        }else{
            resolve(dividendo/divisor);
        }
    })
}

dividir(10,0).then(message =>{
    console.log(message);
}).catch(err =>{
    console.log(err);
});