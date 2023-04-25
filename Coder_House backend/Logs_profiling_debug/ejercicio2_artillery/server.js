const express = require('express')
const app = express()

/* -------------------------- DEBUG ---------------------------- */
//----------------1-slow
//consola 1
//node --prof server.js

//AMBOS TEST CON
//consola 2
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_slow.txt

//consola 2
//info- cambiar nombre de archivo generado por el artillery a slow-v8.log
//node --prof-process slow-v8.log > prof_slow.txt

//para validar en chrome-----------

//consola 1
//node --inspect server.js


// en chrome, luego en Open dedicated DevTools for Node, luego run en profiler 
//chrome://inspect

//consola 2
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_slow.txt

//cuando termine proceso de consola 2 parar el proceso de chrome y mirar lo que tardo cada archivo, como el server.js



/* ----------------------------------------------------------- */

/* -------------------------- NO_DEBUG ---------------------------- */
//----------------2-fast
//consola 1
//node --prof server.js

//consola 2

//AMBOS TEST CON
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-nodebug" > artillery_fast.txt

//consola 2
//info- cambiar nombre de archivo generado por el artillery a fast-v8.log
//node --prof-process fast-v8.log > prof_fast.txt

//para validar en chrome-----------

//consola 1
//node --inspect server.js


// en chrome, luego en Open dedicated DevTools for Node, luego run en profiler 
//chrome://inspect

//consola 2
//artillery quick -c 50 -n 50 "http://localhost:8080/ramdom-debug" > artillery_slow.txt

//cuando termine proceso de consola 2 parar el proceso de chrome y mirar lo que tardo cada archivo, como el server.js

/* ----------------------------------------------------------- */

function calcularRandoms(min, max, cant) {
    let randoms = []
    for (let i = 0; i < cant; i++) {
        let random = parseInt(Math.random() * (max - min + 1)) + min
        randoms.push(random)
    }
    return randoms
}

app.get('/ramdom-debug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    console.log(randoms)
    res.json({ randoms });
})

app.get('/ramdom-nodebug', (req, res) => {
    let randoms = calcularRandoms(0, 9, 10000)
    res.json({ randoms });
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))