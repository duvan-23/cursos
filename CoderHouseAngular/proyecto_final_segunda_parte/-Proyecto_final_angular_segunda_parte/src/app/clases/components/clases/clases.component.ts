import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';
import {MatPaginator} from '@angular/material/paginator';
import { Observable, tap } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AgregarEstudiantesComponent } from '../../../estudiantes/components/crud_estudiantes/agregar-estudiantes/agregar-estudiantes.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarEstudiantesComponent } from '../../../estudiantes/components/crud_estudiantes/editar-estudiantes/editar-estudiantes.component';
import { EliminarEstudiantesComponent } from '../../../estudiantes/components/crud_estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { Curso } from 'src/app/models/curso';
import { cursos } from 'src/app/datos/cursos';
import { AgregarClaseComponent } from '../crud_clase/agregar-clase/agregar-clase.component';
import { CursosService } from '../../services/cursos.service';
import { EditarClaseComponent } from '../crud_clase/editar-clase/editar-clase.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  cursos$!:  Observable<Curso[]>;
  estudiante_edit!: any;
  columnas: string[] = ['id','nombre','comision','profesor','inscripcionAbierta','acciones'];
  dataSource!: MatTableDataSource<Curso>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private cursoService: CursosService,
    private dialog: MatDialog,private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.cursos$.subscribe((data)=>{
        this.dataSource=new MatTableDataSource<Curso>(data);
    });
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
        res.imagen='https://parentesis.com/imagesPosts/coder00.jpg'
        this.cursoService.agregarCurso({
          ...res,
          id: this.cursoService.obtenerId()
        });
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Agrego la clase ${res.nombre} Exitosamente`, "Cerrar", {
          duration: 3000
        });
        this.router.navigate(['cursos']);
      }
    })
  }

  editarCurso(id:number){
    let curso;
    this.cursoService.obtenerCurso(id).subscribe((data)=>{
      curso=data['0'];
    });
    let dialog =this.dialog.open(EditarClaseComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container',
      data: curso
    });
    dialog.beforeClosed().subscribe(res=>{
      if(res.nombre){
        console.log(res);
        this.cursoService.editarCurso(res);
        this.dataSource.paginator = this.paginator;
        this._snackBar.open(`Edito la clase${res.nombre} ${res.apellido} Exitosamente`, "Cerrar", {
          duration: 3000
        });
      }
    })
  }
}
