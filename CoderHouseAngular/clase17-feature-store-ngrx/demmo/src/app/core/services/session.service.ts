import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionSubject!: BehaviorSubject<Session>;
  constructor(
    private http: HttpClient
  ) {
    const session: Session = {
      sessionActiva:false
    };
    this.sessionSubject = new BehaviorSubject(session);
   }
  login(usuario: Usuario): Observable<Usuario>{
    // const session: Session = {
    //   sessionActiva: true,
    //   usuarioActivo: usuario
    // }
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[])=>{
        return usuarios.filter((u: Usuario)=>u.usuario ===usuario.usuario && u.contrasena === usuario.contrasena)[0]
      })
    );
    // this.sessionSubject.next(session);
  }

  obtenerSession(): Observable<Session>{
    return this.sessionSubject.asObservable();
  }
}
