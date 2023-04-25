const express =require('express');
const cluster = require('cluster');
const os = require('os');

const numCpus= os.cpus().length;
if(cluster.isPrimary){
    console.log(numCpus);
    console.log(process.pid);
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();   
    }
}else{
    const app =express();

    const PORT = parseInt(process.argv[2]) || 8080;

    app.get('/', (req, res) => {
        res.send(`servidor express on ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`);

    });

    app.listen(PORT, err => {
        console.log(err);
})
}


//validar node en cmd
//comando: tasklist /fi "imagename eq node.exe"