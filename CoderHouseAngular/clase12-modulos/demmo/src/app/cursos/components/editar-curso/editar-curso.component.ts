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
  Id!:number;
  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros)=>{
      console.log(parametros.get("inscripcionAbierta"));
      this.Id= parseInt(parametros.get("id") || '0');
      this.formulario = new FormGroup({
        nombre: new  FormControl(parametros.get("nombre"), [Validators.required]),
        comision: new  FormControl(parametros.get("comision")),
        profesor: new  FormControl(parametros.get("profesor")),
        inicio: new  FormControl(new Date(parametros.get("fechaInicio")||'')),
        fin: new  FormControl(new Date(parametros.get("fechaFin")||'')),
        inscripcionAbierta: new  FormControl(parametros.get("inscripcionAbierta")=="true"),
      });
    })
  }
  editarCurso(){
    let c: Curso = {
      id: this.Id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor:this.formulario.value.profesor,
      fechaInicio: this.formulario.value.inicio,
      fechaFinal: this.formulario.value.fin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
    console.log(c);
    this.cursoService.editarCurso(c);
    this.router.navigate(['cursos/listar'])
  }
}
