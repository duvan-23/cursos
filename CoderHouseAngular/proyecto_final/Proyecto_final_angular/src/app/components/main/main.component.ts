import { Component, OnInit } from '@angular/core';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listaTiendasPadre: string ="hola";
  listaEstudiantesPadre: Array<Estudiantes>=estudiantes;
  constructor() { }

  ngOnInit(): void {
  }

}
