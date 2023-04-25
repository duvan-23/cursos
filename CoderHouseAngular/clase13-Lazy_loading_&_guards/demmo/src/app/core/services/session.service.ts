import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';

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
  login(usuario: string, contrasena:string, admin: boolean){
    const session: Session = {
      sessionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin:admin
      }
    }
    this.sessionSubject.next(session);
  }

  obtenerSession(): Observable<Session>{
    return this.sessionSubject.asObservable();
  }
}
