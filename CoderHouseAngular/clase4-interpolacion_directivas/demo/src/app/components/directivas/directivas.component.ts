import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  nombre!: string; //simbolo ! para indicar que ahora no tiene valor pero lo tendrá en el futuro
  nombre2?: string; // simbolo ? para indicar que no tiene valor ahora y en el futuro puede ser null
  variable1: number = 10;
  variable2: number = 5;
  usuarioActivo: Persona ={
    nombre:'Ana',
    edad:26
  }
  listaNombres:Array<Persona>=[
    {nombre:'Abner',edad: 26},
    {nombre:'Celeste',edad: 8},
    {nombre:'Pablo',edad: 30},
    {nombre:'Ijak',edad: 10},
    {nombre:'Fredy',edad: 15}
  ];
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  manejarEvento(){
    this.nombre='';
    this.variable1= Math.round(Math.random()*10);
  }
}
