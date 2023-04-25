const express =require('express');


const app =express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send(`servidor express on ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`);

});

app.listen(PORT, err => {
    console.log(err);
})



//forever start server.js
//forever list
//forever stop 0