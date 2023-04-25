import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionSubject!: BehaviorSubject<Session>;
  constructor() {
    const session: Session = {
      sessionActiva:false
    };
    this.sessionSubject = new BehaviorSubject(session);
   }
  login(usuario: Usuario){
    const session: Session = {
      sessionActiva: true,
      usuarioActivo: usuario
    }
    this.sessionSubject.next(session);
  }

  obtenerSession(): Observable<Session>{
    return this.sessionSubject.asObservable();
  }
}
