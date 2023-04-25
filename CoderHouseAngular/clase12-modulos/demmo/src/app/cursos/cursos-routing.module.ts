import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';

const routes: Routes = [
  {path:'cursos',component:CursosInicioComponent,children:[
    {path:'listar',component: ListarCursoComponent},
    {path:'agregar',component: AgregarCursoComponent},
    {path:'editar',component: EditarCursoComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
