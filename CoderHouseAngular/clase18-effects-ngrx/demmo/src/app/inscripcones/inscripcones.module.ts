import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripconesRoutingModule } from './inscripcones-routing.module';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';


@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
    InscripconesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripconesModule { }
