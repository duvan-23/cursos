import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  cursos: Curso[]=[
    {nombre:"Angular",comision:"32310",profesor:"Keven",fechaInicio: new Date(2022, 0, 1),fechaFinal: new Date(2022, 0, 1),inscripcionAbierta:true,imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {nombre:"Angular",comision:"32320",profesor:"Fernando",fechaInicio: new Date(2022, 2, 1),fechaFinal: new Date(2022, 3, 30),inscripcionAbierta:true,imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {nombre:"ReactJS",comision:"33310",profesor:"Arturo",fechaInicio: new Date(2022, 1, 1),fechaFinal: new Date(2022, 4, 28),inscripcionAbierta:false,imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {nombre:"VueJs",comision:"34310",profesor:"Lautaro",fechaInicio: new Date(2022, 5, 1),fechaFinal: new Date(2022, 6, 30),inscripcionAbierta:false,imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg"},
  ];

  columnas: string[] = ['nombre','comision','profesor','fechaInicio','fechaFinal','inscripcionAbierta','acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(curso: Curso, filtro: string){
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(curso: Curso, filtro: string){
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
  editar(){
    console.log(this.cursos);
  }
}
