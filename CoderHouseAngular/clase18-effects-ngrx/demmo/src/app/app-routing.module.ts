import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  {path:'inicio',component: InicioComponent, canActivate: [AutenticacionGuard]},//canActivate para poder activar el componente si inicio session
  {
    path:'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m)=> m.CursosModule),
    canActivate: [AutenticacionGuard]
  },//quitar CursosModule de app.module.ts
  {
    path:'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m)=> m.AutenticacionModule)
  },//quitar CursosModule de app.module.ts
  {
    path:'inscripciones',
    loadChildren: () => import('./inscripcones/inscripcones.module').then((m)=> m.InscripconesModule),
    canLoad: [AutenticacionGuard]
  },//quitar AutenticacionModule de app.module.ts
  {
    path:'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((m)=> m.UsuariosModule),
    canLoad: [AutenticacionGuard]
  },//quitar AutenticacionModule de app.module.ts
  {path:'', redirectTo:'inicio',pathMatch:'full'},
  {path:'**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
