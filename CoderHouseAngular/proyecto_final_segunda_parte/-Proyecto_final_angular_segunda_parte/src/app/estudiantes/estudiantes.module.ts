import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { AgregarEstudiantesComponent } from './components/crud_estudiantes/agregar-estudiantes/agregar-estudiantes.component';
import { EditarEstudiantesComponent } from './components/crud_estudiantes/editar-estudiantes/editar-estudiantes.component';
import { EliminarEstudiantesComponent } from './components/crud_estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EstudiantesComponent,
    AgregarEstudiantesComponent,
    EditarEstudiantesComponent,
    EliminarEstudiantesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EstudiantesComponent,
    AgregarEstudiantesComponent,
    EditarEstudiantesComponent,
    EliminarEstudiantesComponent,
  ]
})
export class EstudiantesModule { }
