const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Entro al servidor correctamente')
    res.end(getMensaje())
})

const PORT = 8081;
const connectedServer = server.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`)
})

const getMensaje= ()=> {
    const hora = new Date().getHours();

    if(hora>=6 && hora<= 12){
        return 'Buenos dias'
    }

    if(hora>=13 && hora<= 19){
        return 'Buenas tardes'
    }

    return 'Buenas Noches'
}