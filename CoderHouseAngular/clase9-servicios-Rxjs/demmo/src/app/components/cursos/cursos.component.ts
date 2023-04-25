import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursoAplhaService } from 'src/app/services/curso-aplha.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: Curso[];
  constructor(
    private cursoService: CursoService,
    private cursoAlphaService: CursoAplhaService
  ) {

  }

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
  }
  agregarCusro(){
    let curso: Curso ={
      nombre: 'Angular Avanzado',
      comision: '22234',
      profesor: 'Giancarlo Oblitas',
      fechaInicio: new Date(),
      fechaFinal: new Date(),
      inscripcionAbierta: true,
      imagen: '',
      estudiantes: [{
        nombre:'Jessica',
        apellido:'Wulfson',
        usuario:'jwulfson',
        contraseña:'1234'
      }]
    };
    this.cursoService.agregarCurso(curso);
  }
}
