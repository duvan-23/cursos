class UsuariosDTO {
    constructor({ username,name, password, direccion,telefono,foto,edad,contador}) {
        this.username = username,
        this.name = name,
        this.password = password,
        this.direccion = direccion,
        this.telefono = telefono,
        this.foto = foto,
        this.edad = edad,
        this.contador = contador

    }
}

let transformarADTO3= function (usuarios) {
    if (Array.isArray(usuarios)) {
        return usuarios.map(p => new UsuariosDTO(p))
    } else {
        return new UsuariosDTO(usuarios)
    }
}

module.exports ={transformarADTO3};