import { createAction, props } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';

export const cargarInscripciones = createAction(
  '[Inscripciones] Cargar Inscripcioness'
);

export const InscripcionesCargadas = createAction(
  '[Inscripciones] Inscripciones Cargadas',
  props<{inscripciones: Inscripcion[]}>()
);

export const agregarInscripcion= createAction(
  '[Inscripciones] Agregar Inscripcion',
  props<{inscripcion: Inscripcion}>()
);

export const editarInscripcion= createAction(
  '[Inscripciones] Editar Inscripcion',
  props<{inscripcion: Inscripcion}>()
);

export const eliminarInscripcion= createAction(
  '[Inscripciones] Eliminar Inscripcion',
  props<{inscripcion: Inscripcion}>()
);




