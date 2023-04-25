// import express, {json} from "express";
const express = require("express");
const {json} = require("express");
const numeros =[];

const app = express();
app.use(json());

app.post("/ingreso", (req,res)=>{
    const {numero} = req.body;
    numeros.push(numero);
    res.send("Numero almacenado: "+ numero);
})

app.get("/egreso", (req,res)=>{
    res.json({numeros});
})
app.put("/actualizar", (req,res)=>{
    const {numero} = req.body;
    numeros[0]=numero;
    res.json({numeros});
})
app.delete("/borrar", (req,res)=>{
    const {numero} = req.body;
    numeros=numeros.splice(numero,1);
    res.json({numeros});
})

const PORT =8080;

const server = app.listen(PORT, ()=>{
    console.log("server en "+ PORT);
})

server.on("error", error=>{
    console.log(error);
})

//npm i -D mocha