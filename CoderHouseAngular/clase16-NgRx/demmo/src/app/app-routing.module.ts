import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './component/cursos/cursos.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'cursos', component: CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
