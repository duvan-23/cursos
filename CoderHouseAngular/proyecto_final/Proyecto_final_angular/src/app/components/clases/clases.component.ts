import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';
import {MatPaginator} from '@angular/material/paginator';
import { tap } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AgregarEstudiantesComponent } from '../crud_estudiantes/agregar-estudiantes/agregar-estudiantes.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarEstudiantesComponent } from '../crud_estudiantes/editar-estudiantes/editar-estudiantes.component';
import { EliminarEstudiantesComponent } from '../crud_estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { Curso } from 'src/app/models/curso';
import { cursos } from 'src/app/datos/cursos';
import { AgregarClaseComponent } from '../crud_clase/agregar-clase/agregar-clase.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  cursos: Curso[]=cursos;
  estudiante_edit!: any;
  columnas: string[] = ['id','nombre','comision','profesor','inscripcionAbierta'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filtrarNombre(event: Event){
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

  agregarClase(){
    let dialog =this.dialog.open(AgregarClaseComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container'
    });
    dialog.beforeClosed().subscribe(res=>{
      if(res.nombre){
        res.inscripcionAbierta=res.inscripcionAbierta?res.inscripcionAbierta:false;
        this.cursos.push({
          ...res,
          id:this.cursos[this.cursos.length -1].id+1
        });
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Agrego la clase ${res.nombre} Exitosamente`, "Cerrar", {
          duration: 3000
        });
      }
    })
  }
}
