import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import { cursos } from 'src/app/datos/cursos';
import { Curso } from 'src/app/models/curso';
@Component({
  selector: 'app-agregar-estudiantes',
  templateUrl: './agregar-estudiantes.component.html',
  styleUrls: ['./agregar-estudiantes.component.css']
})
export class AgregarEstudiantesComponent implements OnInit {
  formularioEstudiante: FormGroup;
  cursos: Curso[]=cursos;
  cursos2: Curso[]=this.cursos.filter(val => val.inscripcionAbierta === true).map(data => data);
  constructor(
    public dialogRef: MatDialogRef<AgregarEstudiantesComponent>,
    private fb: FormBuilder
    ) {
    this.formularioEstudiante = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]{2,3}$'), Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      nombre_curso: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.formularioEstudiante.value);
  }
}
