import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Session } from 'src/app/models/sesion';
import * as fromSession from './session.reducer';

export const selectSessionState = createFeatureSelector<Session>(
  fromSession.sessionFeatureKey
);

export const selectSessionActiva = createSelector(
  selectSessionState,
  (state) => state
);
