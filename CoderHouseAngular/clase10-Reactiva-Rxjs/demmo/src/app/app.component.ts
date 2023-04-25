import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of } from 'rxjs';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  merge$!: Observable<any>;
  suscripcion: any;
  constructor(
    private cursoService: CursoService
  ){
    console.log('Paso 1');
    //paso2
    cursoService.obtenerCursosPromise().then((valor: Curso[])=>{
      console.log('Desde el Promise',valor);
      this.cursos= valor;
    }).catch((error: any)=>{
      console.error(error);
    })
    this.suscripcion =cursoService.obtenerCursosObservable().subscribe({
      next:(cursos: Curso[])=>{//iterador
        this.cursos= cursos;
        // console.log('Desde el Observable',cursos);
      },
      error:(error)=>{
        console.error(error);
      }
    }).unsubscribe();

    this.cursos$= cursoService.obtenerCursosObservable();
    console.log('Paso3');

  }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  ngOnInit(): void{
    //of retorna una vez con todos los registros [0,1,2]
    of(this.cursos).pipe(
      map((cursos: Curso[])=>cursos.filter((curso: Curso)=>curso.nombre === 'Kotlin'))
    )
    .subscribe((cursos)=>{
      console.log('Desde el of', cursos);
    });
    //from retorna varias veces cada vez con un solo resultado 0 1 2
    from(this.cursos).pipe(
      filter((curso: Curso)=>curso.nombre === 'Angular')
    ).subscribe((cursos)=>{
      console.log('Desde el from', cursos);
    });

    // of(this.cursos).pipe(
    //   mergeMap(
    //     (cursos: Curso[]) => interval(1000).pipe(map(i => i + cursos[i].nombre))
    //   )
    // ).subscribe((cursos)=>{
    //   console.log('Utilizando MergeMap', cursos);
    // });

    this.merge$ = of(['a','b','c','d']).pipe(
      mergeMap(
        letras=>interval(1000).pipe(
          map((i) => i + letras[i])
        )
      )
    )

  //  of(this.cursos).pipe(
  //     mergeMap(
  //       (cursos: Curso[]) => from(this.cursos).pipe(
  //         map(
  //           (curso: Curso)=>cursos.filter(c =>c.nombre === curso.nombre)
  //         )
  //       )
  //     )
  //   ).subscribe(console.log)
  }
  agregarCurso(){
    let curso: Curso ={
      nombre:'TyperScript',
      comision: '32320',
      profesor: 'Jesica',
      fechaInicio: new Date(),
      fechaFin: new Date()
    }
    this.cursoService.agregarCurso(curso);
  }
}

