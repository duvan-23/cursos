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


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, AfterViewInit  {
  listaEstudiantes: Estudiantes[]=estudiantes;
  estudiante_edit!: any;
  columnas: string[] = ['id','nombre','correo','edad','curso','acciones'];
  dataSource: MatTableDataSource<Estudiantes> = new MatTableDataSource<Estudiantes>(this.listaEstudiantes);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filtrarNombre(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(estudiante: Estudiantes, filtro: string){
      return estudiante.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()) ||estudiante.apellido.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  filtrarCorreo(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(estudiante: Estudiantes, filtro: string){
      return estudiante.correo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  agregarEstudiante(){
    let dialog =this.dialog.open(AgregarEstudiantesComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container'
    });
    dialog.beforeClosed().subscribe(res=>{
      console.log(res);
      if(res.nombre){
        this.listaEstudiantes.push({
          ...res,
          id:this.listaEstudiantes[this.listaEstudiantes.length -1].id+1
        });
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Agrego el estudiante ${res.nombre} ${res.apellido} Exitosamente`, "Cerrar", {
          duration: 3000
        });
      }
    })
  }
  editarEstudiante(id:number){
    let estudiante= this.listaEstudiantes.find(e => e.id==id);
    let dialog =this.dialog.open(EditarEstudiantesComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container',
      data: estudiante
    });
    dialog.beforeClosed().subscribe(res=>{
      if(res.nombre){
        let position = this.listaEstudiantes.findIndex(e=>e.id == res.id);
        this.listaEstudiantes.splice(position,1,res);
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Edito el estudiante ${res.nombre} ${res.apellido} Exitosamente`, "Cerrar", {
          duration: 3000
        });
      }
    })
  }
  eliminarEstudiante(id:number){
    this.estudiante_edit= this.listaEstudiantes.find(e => e.id==id);
    let dialog =this.dialog.open(EliminarEstudiantesComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container',
      data: this.estudiante_edit
    });
    dialog.beforeClosed().subscribe(res=>{
      if(res.id){
        let position = this.listaEstudiantes.findIndex(e=>e.id == res.id);
        this.listaEstudiantes.splice(position,1);
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Elimino el estudiante ${this.estudiante_edit.nombre} ${this.estudiante_edit.apellido} Exitosamente`, "Cerrar", {
          duration: 3000
        });
      }
    })
  }
}
