import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario';

export const loadSessions = createAction(
  '[Session] Load Sessions'
)
export const loadSessionActiva = createAction(
  '[Session] Load Session Activa',
  props<{usuarioActivo: Usuario}>()
);




