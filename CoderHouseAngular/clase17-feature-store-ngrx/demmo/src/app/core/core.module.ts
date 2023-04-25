import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { SessionService } from './services/session.service';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import { reducer, sessionFeatureKey } from './state/session.reducer';




@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(sessionFeatureKey,reducer)
  ],
  providers: [
    SessionService
  ],
  exports: []
})
export class CoreModule { }
