import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarCursoComponent } from './components/listar-curso/listar-curso.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'cursos',component:CursosInicioComponent,children:[
    {path:'listar',component: ListarCursoComponent},
    {path:'agregar',component: AgregarCursoComponent},
    {path:'editar',component: EditarCursoComponent},
  ]},
  {path:'', redirectTo:'inicio',pathMatch:'full'},
  {path:'**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
