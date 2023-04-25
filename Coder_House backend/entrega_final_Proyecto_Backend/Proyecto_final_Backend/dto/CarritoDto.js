class CarritoDTO {
    constructor({ id, user, productos,timestamp}) {
        this.id = id,
        this.user = user,
        this.productos = productos,
        this.timestamp = timestamp

    }
}

let transformarADTO= function (carrito) {
    if (Array.isArray(carrito)) {
        return carrito.map(p => new CarritoDTO(p))
    } else {
        return new CarritoDTO(carrito)
    }
}

module.exports ={transformarADTO};