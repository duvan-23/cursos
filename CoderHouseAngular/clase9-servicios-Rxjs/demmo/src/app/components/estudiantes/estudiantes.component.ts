import { Component, Inject, OnInit } from '@angular/core';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  cursos!: Curso[];
  estudiantes!: Estudiante[];
  constructor(
    // private cursoService: CursoService
    @Inject(token) private config: Configuracion // token para llamar a dos servicios en la misma variable
  ) { }

  ngOnInit(): void {
    // this.cursos = this.cursoService.obtenerCursos();
    this.cursos = this.config.servicios.cursos.obtenerCursos();
    this.estudiantes = this.config.servicios.estudiantes.obtenerEstudiantes();
  }

}
