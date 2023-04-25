import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { cursos } from 'src/app/datos/cursos';
import { BehaviorSubject, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Curso[]=cursos;
  private cursoSubject: BehaviorSubject<Curso[]> ;
  constructor() {
    this.cursoSubject= new BehaviorSubject(this.cursos);
  }
  obtenerCursos():Observable<Curso[]>{
    return this.cursoSubject.asObservable();
  }
  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursoSubject.next(this.cursos);
  }
  obtenerId():number{
    return this.cursos[this.cursos.length -1].id+1;
  }
  obtenerCurso(id: number):Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((curso: Curso[]) => curso.filter((curso:Curso)=> curso.id ===id))
    )
  }
  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((e: Curso) =>e.id === curso.id);
    if(indice > -1){
      this.cursos[indice]= curso;
      this.cursoSubject.next(this.cursos);
    }
  }
  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((e: Curso) =>e.id === id);
    if(indice > -1){
      this.cursos.splice(indice, 1);
      this.cursoSubject.next(this.cursos);
    }
  }
}
