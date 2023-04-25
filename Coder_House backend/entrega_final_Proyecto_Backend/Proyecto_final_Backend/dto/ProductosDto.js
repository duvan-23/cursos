class ProductosDTO {
    constructor({ nombre, descripcion, codigo,precio,stock,foto,timestamp,id}) {
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.precio = precio
        this.stock = stock
        this.foto = foto
        this.timestamp = timestamp
        this.id = id

    }
}

let transformarADTO2= function (productos) {
    if (Array.isArray(productos)) {
        return productos.map(p => new ProductosDTO(p))
    } else {
        return new ProductosDTO(productos)
    }
}

module.exports ={transformarADTO2};