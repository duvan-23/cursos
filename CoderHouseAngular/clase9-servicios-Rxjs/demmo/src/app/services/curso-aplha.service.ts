import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoAplhaService {
  private cursos: Curso[]=[];

  constructor() { }

  obtenerCursos(): Curso[]{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
  }
}
