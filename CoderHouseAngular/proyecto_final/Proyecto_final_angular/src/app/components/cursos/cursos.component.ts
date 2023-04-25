import { Component, OnInit } from '@angular/core';
import { cursos } from 'src/app/datos/cursos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  filtro: string="";
  filtro_fecha: string="";
  cursos: Curso[]=cursos;
  constructor() { }

  ngOnInit(): void {
  }

}
