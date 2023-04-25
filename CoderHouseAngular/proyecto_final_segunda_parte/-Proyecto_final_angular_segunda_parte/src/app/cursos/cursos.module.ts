import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './components/cursos/cursos.component';
import { MaterialModule } from '../material.module';
import { FiltroCursosPipe } from './pipe/filtro-cursos.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosComponent,
    FiltroCursosPipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MaterialModule,
    CursosComponent
  ]
})
export class CursosModule { }
