import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticationGuard } from './core/guards/autentication.guard';

const routes: Routes = [
  {path:'inicio',component: InicioComponent, canActivate: [AutenticationGuard]},
  {
    path:'empleados',
    loadChildren: () => import('./empleados/empleados.module').then((m)=> m.EmpleadosModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then((m)=> m.LoginModule)
  },
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
