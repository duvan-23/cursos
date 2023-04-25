const modo = process.env.MODO ?? 'prod'
const puerto = process.env.PORT ?? 0
const debug = process.env.DEBUG =='true' ? true: false

console.log({
    modo,
    puerto,
    debug
});

//bash
//export MODO=dev
//export PORT=8080
//export DEBUG=true

//bash ---quitar valores
// unset MODO
// unset PORT
// unset DEBUG