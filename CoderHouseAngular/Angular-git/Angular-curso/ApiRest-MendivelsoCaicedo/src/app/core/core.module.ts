import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PadreComponent } from './components/padre/padre.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    NavbarComponent,
    ToolbarComponent,
    PadreComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    SessionService
  ],
  exports: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    NavbarComponent,
    ToolbarComponent,
    PadreComponent,
    RouterModule,
  ]
})
export class CoreModule { }
