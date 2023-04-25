const parseArgs = require('minimist');

const options ={
    alias:{
        m:'modo',
        p:'puerto',
        d:'debug'
    },
    default:{
        modo:'prod',
        puerto:0,
        debug:false
    }
}

const {modo, puerto, debug, _ }= parseArgs(process.argv.slice(2),options);

console.log({modo, puerto, debug, otros: _});

//ejercicios -------------------
//node server.js 1 2 3
//node server.js 1 2 3 -m desarrollador -p 8080 -d
