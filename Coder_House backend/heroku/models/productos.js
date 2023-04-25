const mongoose =require( 'mongoose');

const productosCollection = 'productos';

const ProductosSchema= new mongoose.Schema({
    id: {type: Number, required: true},
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    foto: {type: String, required: true}
});

const productos = mongoose.model(productosCollection, ProductosSchema);
module.exports ={productos};