import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AutenticationGuard } from '../core/guards/autentication.guard';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  {path:'', canActivate: [AutenticationGuard],children:[
    {path:'listar',component: ListaComponent},
    {path:'agregar',component: ContenidoComponent,canActivate: [ AdminGuard]},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
