const parseArgs = require('yargs/yargs');

const yargs = parseArgs(process.argv.slice(2));

const {modo, puerto, debug, _ }=yargs
    .boolean('debug')
    .alias({
        m:'modo',
        p:'puerto',
        d:'debug'
    })
    .default({
        modo:'Produccion',
        puerto:0,
        debug:false
    })
    .argv

console.log({modo, puerto, debug, otros:_});


//pruebas ----------------
//node server.js 1 2 3
//node server.js 1 2 3 4 5 6 7 -m dev -p 8080 -d
