import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {Estudiante} from '../../models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  //decorador Input para mandar info de un componente a otro atraves de este decorador que creamos estudiantes
  @Input() estudiantes!: Estudiante[];
  @Input() usuarioActivo!: any;
  @Input() funcionPrueba!: ()=>void;
  // @Input() funcionPrueba!: (args: any[])=>void;
  @Output() eventoSalida: EventEmitter<string> = new EventEmitter<string>();
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  nombreEstudiante!:string;
  constructor() {

  }

  ngOnInit(): void {// como un document.ready  cuando ya se inicializo el componente
    this.funcionPrueba();
    this.eventoSalida.emit("Este menssaje lo estoy enviando desde el componente hijo");
  }
  agregarEstudiante(){
    let estudiante: Estudiante={
      nombre:"David",
      curso:"ReactJS"
    }
    this.eventoSalidaEstudiante.emit(estudiante);
  }
}
