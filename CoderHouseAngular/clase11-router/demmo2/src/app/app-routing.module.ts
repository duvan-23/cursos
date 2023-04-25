import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: '', redirectTo:'inicio', pathMatch: 'full'},//puede ser full o prefix
  {path: '**', component:PaginaNoEncontradaComponent},//ruta no especificada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
