import { Component, Input, OnInit } from '@angular/core';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  @Input() listaEstudiantesHijo!: Array<Estudiantes>;
  @Input() listaTiendas!: string;
  constructor() { }
  ngOnInit(): void {
  }

}
