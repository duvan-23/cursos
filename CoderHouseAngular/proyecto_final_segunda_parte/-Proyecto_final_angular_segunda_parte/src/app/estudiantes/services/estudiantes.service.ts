import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  listaEstudiantes: Estudiantes[]=estudiantes;
  private estudiantesSubject: BehaviorSubject<Estudiantes[]> ;
  constructor() {
    this.estudiantesSubject= new BehaviorSubject(this.listaEstudiantes);
  }

  obtenerEstudiantes():Observable<Estudiantes[]>{
    return this.estudiantesSubject.asObservable();
  }
  agregarEstudiante(estudiante: Estudiantes){
    this.listaEstudiantes.push(estudiante);
    this.estudiantesSubject.next(this.listaEstudiantes);
  }
  obtenerId():number{
    return this.listaEstudiantes[this.listaEstudiantes.length -1].id+1;
  }
  obtenerEstudiante(id: number):Observable<Estudiantes[]>{
    return this.obtenerEstudiantes().pipe(
      map((estudiante: Estudiantes[]) => estudiante.filter((estudiante:Estudiantes)=> estudiante.id ===id))
    )
  }
  editarEstudiante(estudiante: Estudiantes){
    let indice = this.listaEstudiantes.findIndex((e: Estudiantes) =>e.id === estudiante.id);
    if(indice > -1){
      this.listaEstudiantes[indice]= estudiante;
      this.estudiantesSubject.next(this.listaEstudiantes);
    }
  }
  eliminarEstudiante(id: number){
    let indice = this.listaEstudiantes.findIndex((e: Estudiantes) =>e.id === id);
    if(indice > -1){
      this.listaEstudiantes.splice(indice, 1);
      this.estudiantesSubject.next(this.listaEstudiantes);
    }
  }
}
