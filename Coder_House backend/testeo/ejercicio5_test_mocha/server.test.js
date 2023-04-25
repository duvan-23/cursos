import {strictEqual, deepStrictEqual} from "assert";
import axios from "axios";

const enviarNumero = numero => axios.post("http://localhost:8080/ingreso", {numero});
const recibirNumeros = () => axios("http://localhost:8080/egreso")

describe("Comprobando que el servidor funcione", function (){
    before(function(){
        console.log("----------Comienza TOTAL de Test  --------");
    })
    after(function(){
        console.log("----------Final TOTAL de Test  --------");
    })
    beforeEach(function(){
        console.log("----------Comienza Test  --------");
    })
    afterEach(function(){
        console.log("----------Fin Test  --------");
    })

    it("Guardar 10 numeros y recibir 10 numeros", async function (){
        for(let i=0; i<10;i++) await enviarNumero(i)

        const {data} = await recibirNumeros();
        const {numeros} = data;

        strictEqual(numeros.length, 10);
        deepStrictEqual(numeros, [0,1,2,3,4,5,6,7,8,9])
    })
})

//npm run test
//"test": "mocha server.test.js" ----- en scripts package.json 
//correr en otra consola server.js
//solo funciona una vez, para volver a probar, volver a correr server.js