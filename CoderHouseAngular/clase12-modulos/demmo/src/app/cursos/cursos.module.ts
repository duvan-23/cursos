import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursoComponent,
    CursosInicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
