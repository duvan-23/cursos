const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const messages = [
    { author: 'Juan', message: 'Hola, soy Juan!'}
]

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado!')
    //con socket.emit enviamos a un solo websocket
    socket.emit('messages', messages)
    //.on en este archivo es para recibir el llamado del cliente y le devuleve datos al cliente(on es un punto de conección)
    socket.on('new-message', data => {
        messages.push(data)
        //con io.socket.emit enviamos a todos los websocket conectados
        io.sockets.emit('messages', messages)
    })
})

const PORT = 8080
httpServer.listen(PORT, () => console.log('Iniciando en el puerto: ' + PORT))