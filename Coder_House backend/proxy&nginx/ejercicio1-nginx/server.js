//--------------------------Modo fork
//un solo nucleo
//pm2 start server.js -f --name="server1" --watch -- 8081 FORK

//pm2 list
//pm2 stop 0
//pm2 restart 0
//pm2 delete 0
//pm2 describe 0
//pm2 monit
//pm2 delete all

//---------------------------Modo cluster
//puede usar varios nucleos
//pm2 start server.js -f --name="server2" --watch -- 8082 CLUSTER

//--------NGINX
//start nginx
//tasklist /fi "imagename eq nginx.exe"
//nginx -s reload 
//nginx -s quit 
const express =require('express');
const cluster =require('cluster');
const os =require('os');
// import express from 'express';
// import cluster from 'cluster';
// import * as os from 'os';

const modoCluster = process.argv[3] == 'CLUSTER';
if(modoCluster && cluster.isPrimary) {
    const numCpus = os.cpus().length;

    console.log('Numero de procesadores: ' + numCpus);
    console.log('PID:' + process.pid);

    for(let i=0; i<numCpus; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', worker => {
        console.log('Worker ' + process.pid + ' murio');
        cluster.fork();
    })
} else {
    const app = express();
    const PORT = parseInt(process.argv[2]) || 8080;
    app.get('/api/randoms/', (req, res) => {
        console.log(process.pid);
        res.send(`Server en PORT(${PORT}) - PID(${process.pid}) - FYH(${new Date().toLocaleString()}) -- ${modoCluster}`)
    });
        
    app.listen(PORT, err => {
        if (!err) {
            console.log(`Escuchando en el puerto ${PORT} - PID ${process.pid}`)
        }
    });
}

