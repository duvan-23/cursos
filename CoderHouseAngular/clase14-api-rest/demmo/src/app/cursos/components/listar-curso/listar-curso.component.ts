import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$= this.cursoService.obtenerCursos();
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
