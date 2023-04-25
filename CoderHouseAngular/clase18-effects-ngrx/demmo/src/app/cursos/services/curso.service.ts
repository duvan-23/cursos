import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../models/curso';

@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursosProyecto`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejaError)
    );
  }
  obtenerCurso(id: number){
    return this.http.get<Curso>(`${environment.api}/cursosProyecto/${id}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejaError)
    );
  }
  agregarCurso(curso: Curso){
    this.http.post<Curso>(`${environment.api}/cursosProyecto`,curso,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejaError)
    ).subscribe(console.log);
  }
  editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.api}/cursosProyecto/${curso.id}`,curso).pipe(
      catchError(this.manejaError)
    ).subscribe(console.log);
  }
  eliminarCurso(id: number){
    this.http.delete<Curso>(`${environment.api}/cursosProyecto/${id}`).pipe(
      catchError(this.manejaError)
    ).subscribe(console.log);
  }

  private manejaError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn("Error del lado del cliente", error.error.message);
    }else{
      console.warn("Error del lado del servidor", error.error.message);
    }

    return throwError(()=> new Error('Error en La comunicación HTTP'))
  }
}
