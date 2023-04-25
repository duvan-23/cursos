import {Persona} from './persona';
import {Inscripcion} from './inscripcion';
export class Usuario extends Persona implements Inscripcion{
    private correo:string;
    private contraseña:string;
    nombreClase: string;
    fecha: Date;
    constructor(nombre:string,apellido:string,edad:number,correo:string,contraseña:string){
        super(nombre, apellido, edad);
        this.correo=correo;
        this.contraseña=contraseña;
    }

    //polimorfismo dos metodos con el mismo nombre pero diferente funcionalidad en  clase Persona y clase hija Usuario,
    //posible con protected variable de clase padre, seran privadas pero se podran llamar en clases hijas
    obtenerNombre():string{
        return this.nombre +" "+ this.apellido;
    }

    inscribir(){
        return "Inscribiendo Usuario";
    }

    obtenerCorreo(){
        return this.correo;
    }
}