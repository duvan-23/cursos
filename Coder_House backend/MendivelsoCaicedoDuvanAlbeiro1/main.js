class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido =apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {       
        return console.log(`${this.nombre} ${this.apellido}`);
    }
    addMascota(dato){
        this.mascotas.push(dato);
    }
    countMascotas(){
        return console.log(this.mascotas.length);
    }
    addBook(dato1, dato2){
        this.libros.push({nombre:dato1, autor:dato2});
    }
    getBookNames(){
        let nombres=[];
        this.libros.forEach(element => {
            nombres.push(element.nombre)
        });
        return console.log(nombres);
    }
}
let librosp=[];
let mascotap=[];
let usuario = new Usuario("Juan","Sanchez",librosp,mascotap);
usuario.getFullName();
usuario.addMascota("Perro");
usuario.addMascota("Gato");
usuario.addMascota("Pato");
usuario.countMascotas();
usuario.addBook("Libro Basico","David Perez");
usuario.addBook("Libro Intermedio","Juan Ramirez");
usuario.addBook("Libro Avanzado","Wilmer Mendez");
usuario.getBookNames();

