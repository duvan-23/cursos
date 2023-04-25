import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  curso!:Curso;
  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros)=>{
      console.log(parametros.get("inscripcionAbierta"));

      this.curso = {
        id:  parseInt(parametros.get("id") || '0'),
        nombre: parametros.get("nombre")|| '',
        comision: parametros.get("comision") || '',
        profesor: parametros.get("profesor") || '',
        fechaInicio: new Date(parametros.get("fechaInicio")||''),
        fechaFinal: new Date(parametros.get("fechaFin")||''),
        inscripcionAbierta: parametros.get("inscripcionAbierta")=="true",
        imagen: parametros.get("imagen") || 'https://parentesis.com/imagesPosts/coder00.jpg'
      }
      this.formulario = new FormGroup({
        nombre: new  FormControl(this.curso.nombre, [Validators.required]),
        comision: new  FormControl(this.curso.comision),
        profesor: new  FormControl(this.curso.profesor),
        inicio: new  FormControl(this.curso.fechaInicio),
        fin: new  FormControl(this.curso.fechaFinal),
        inscripcionAbierta: new  FormControl(this.curso.inscripcionAbierta),
      });
    })
  }
  editarCurso(){
    let c: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor:this.formulario.value.profesor,
      fechaInicio: this.formulario.value.inicio,
      fechaFinal: this.formulario.value.fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: this.curso.imagen
    }
    console.log(c);
    this.cursoService.editarCurso(c);
    this.router.navigate(['cursos/listar'])
  }
}
