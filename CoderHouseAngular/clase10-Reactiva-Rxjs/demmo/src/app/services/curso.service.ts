import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos: Curso[]=[{
    nombre:'Angular',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre:'ReactJS',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre:'Kotlin',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  }];
  cursos$: Observable<Curso[]>;// '$' para referirse a que es tipo  Observable
  // cursosSubject: Subject<Curso[]>;
  cursosSubject: BehaviorSubject<Curso[]>;//espera argumentos en el constructor, tiene las funciones de Subject pero le agrega nuevas cosas, se le da argumentos para que los cargue valor inicial

  constructor(){
    // this.cursosSubject = new Subject<Curso[]>()
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos)
    this.cursos$ = new Observable<Curso[]>((suscriptor)=>{
      suscriptor.next(this.cursos);

      setTimeout(()=>{
        this.cursos.push({
          nombre:'VueJS',
          comision: '32320',
          profesor: 'Jesica',
          fechaInicio: new Date(),
          fechaFin: new Date()
        })
        suscriptor.next(this.cursos);
      }, 2000);
    })
  }
  obtenerCursosPromise(): Promise<Curso[]> | any{
    return new Promise((resolve, reject)=>{
      if(this.cursos.length > 0){
        resolve(this.cursos);
        this.cursos.push({
          nombre:'Kotlin',
          comision: '32320',
          profesor: 'Jesica',
          fechaInicio: new Date(),
          fechaFin: new Date()
        });
        resolve(this.cursos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles en este momento'
        })
      }
    });
  }
  obtenerCursosObservable(){
    //rxjs
    // return of(this.cursos);
    // return this.cursos$;
    return this.cursosSubject.asObservable();
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }
}
