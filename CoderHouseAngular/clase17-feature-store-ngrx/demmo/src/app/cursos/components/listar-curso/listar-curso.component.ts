import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { Router } from '@angular/router';
import { CursoState } from 'src/app/models/curso.state';
import { Store } from '@ngrx/store';
import { loadCursosFailure, loadCursosSuccess } from '../../state/cursos.actions';
import { selectCursos, selectStateCargando } from '../../state/cursos.selectors';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit, OnDestroy {
  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<boolean>;
  suscriptionCursos!: Subscription;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.suscriptionCursos= this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[])=>{
        this.store.dispatch(loadCursosSuccess({cursos}));
      },
      error: (error: any)=>{
        alert("Hubo un error");
        this.store.dispatch(loadCursosFailure({error}));
      }
    });
    this.cursos$= this.store.select(selectCursos);
    this.cargando$= this.store.select(selectStateCargando);
  }
  ngOnDestroy(): void{
    console.log("El component lista-cursos se esta destruyendo");
    this.suscriptionCursos.unsubscribe();
  }
  eliminarCurso(id:number){
    this.cursoService.eliminarCurso(id);
    this.cursos$= this.cursoService.obtenerCursos();
  }
  editarCurso(curso:Curso){
    this.router.navigate(['cursos/editar',{
      id: curso.id,
      nombre: curso.nombre,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFinal,
      inscripcionAbierta: curso.inscripcionAbierta
    }]);
    this.cursos$= this.cursoService.obtenerCursos();
  }
}
