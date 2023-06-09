import { Action, createReducer, on } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';



export const estadoInicial: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  estadoInicial,

  on(CursosActions.loadCursos, (state) => {
    // const nuevoEstado: CursoState ={
    //   cargando: true,
    //   cursos: state.cursos
    // }
    return {...state, cargando:true};
  }),
  on(CursosActions.loadCursosSuccess, (state, {cursos}) => {
    return {...state, cargando:false,cursos:cursos};
  }),
  on(CursosActions.loadCursosFailure, (state, {error}) => {
    return state;
  }),

);
