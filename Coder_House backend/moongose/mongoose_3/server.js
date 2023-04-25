import mongoose from "mongoose";
import * as models from "./models/estudiante.js";

CRUD()

async function CRUD() {

    const URL = "mongodb://localhost:27017/colegio";
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{

        console.log("Conexión a MongoDB correcta");

        //a
        // getEstudiantesOrderByNombre

        models.estudiantes.find({}).sort({nombre:1})
        .then(estudiantes=>{
            console.log("a");
            console.log("Estudiantes ordenados por nombre: ", estudiantes);
            return
        })
        .then(()=>{
            //b
            //estudiante mas joven
            models.estudiantes.find({}).sort({edad:1}).limit(1)
            .then(estudiante=>{
                console.log("b");
                console.log("Estudiante mas joven: ", estudiante);
                return
            })
            return
        })
        .then(()=>{
            //c
            //estudiante curso 2A
            models.estudiantes.find({curso:"2A"})
            .then(estudiantes=>{
                console.log("c");
                console.log("Estudiantes del curso 2A: ", estudiantes);
                return
            })
            return
        })
        .then(()=>{
            //d
            //suegundo estudiante mas joven
            models.estudiantes.find({}).sort({edad:1}).skip(1).limit(1)
            .then(estudiante=>{
                console.log("d");
                console.log("Segundo estudiante mas joven: ", estudiante);
                return
            })
            return
        })
        .then(()=>{
            //e
            //nombre, apellido, curso ordenados por apellido
            models.estudiantes.find({},{nombre:1, apellido:1, curso:1, _id:0}).sort({apellido:1})
            .then(estudiantes=>{
                console.log("e");
                console.log("Estudiantes orfdenados por apellido: ", estudiantes);
                return
            })
            return
        })
        .then(()=>{
            //f
            //estudiantes con nota 10
            models.estudiantes.find({nota:10})
            .then(estudiantes=>{
                console.log("f");
                console.log("Estudiantes con nota 10: ", estudiantes);
                return
            })
            return
        })
        .then(()=>{
            //g
            //nota promedio de todos los estudiantes
            models.estudiantes.find({})
            .then(estudiantes=>{
                let notaTotal =0;
                estudiantes.forEach(estudiante => {
                    notaTotal += estudiante.nota;
                });
                console.log("g");
                console.log("Promedio nota estudiantes: ", notaTotal/estudiantes.length);
                return
            })
            return
        })
        .then(()=>{
            //h
            //nota promedio de todos los estudiantes del curso 1A
            models.estudiantes.find({curso:"1A"})
            .then(estudiantes=>{
                let notaTotal =0;
                estudiantes.forEach(estudiante => {
                    notaTotal += estudiante.nota;
                });
                console.log("h");
                console.log("Promedio nota estudiantes curso 1A: ", notaTotal/estudiantes.length);
                return
            })
            return
        })
    })
    .catch (error=> {
        console.log("Error", error);
        return
    })
}