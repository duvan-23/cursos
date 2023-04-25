import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursos$= this.cursoService.obtenerCursos();
  }

}
