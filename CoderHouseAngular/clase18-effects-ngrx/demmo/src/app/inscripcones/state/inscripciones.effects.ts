import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as InscripcionesActions from './inscripciones.actions';
import { InscripcionService } from '../services/inscripcion.service';
import { Inscripcion } from 'src/app/models/inscripcion';

@Injectable()
export class InscripcionesEffects {


  cargarInscripcioness$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.cargarInscripciones),
      concatMap(() => this.inscripciones.obtenerInscripciones().pipe(
        map((i: Inscripcion[]) =>InscripcionesActions.InscripcionesCargadas({inscripciones: i}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.agregarInscripcion),
      concatMap(({inscripcion}) => this.inscripciones.agregarInscripciones(inscripcion).pipe(
        map((i: Inscripcion) =>InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  eliminarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.eliminarInscripcion),
      concatMap(({inscripcion}) => this.inscripciones.eliminarInscripciones(inscripcion).pipe(
        map((i: Inscripcion) =>InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  editarInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.editarInscripcion),
      concatMap(({inscripcion}) => this.inscripciones.editarInscripciones(inscripcion).pipe(
        map((i: Inscripcion) =>InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private inscripciones: InscripcionService
    ) {}
}
