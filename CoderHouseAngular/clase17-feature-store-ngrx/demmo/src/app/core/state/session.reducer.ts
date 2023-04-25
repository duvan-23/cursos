import { Action, createReducer, on } from '@ngrx/store';
import { Session } from 'src/app/models/sesion';
import * as SessionActions from './session.actions';

export const sessionFeatureKey = 'session';



export const estadoInicial: Session = {
  sessionActiva: false
};

export const reducer = createReducer(
  estadoInicial,

  on(SessionActions.loadSessions, state => state),
  on(SessionActions.loadSessionActiva, (state,{usuarioActivo}) => {
    return {...state, sessionActiva:true,usuarioActivo:usuarioActivo}
  }),

);
