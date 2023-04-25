import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/models/estudiantes';
import { cursos } from 'src/app/datos/cursos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar-estudiantes.component.html',
  styleUrls: ['./editar-estudiantes.component.css']
})
export class EditarEstudiantesComponent implements OnInit {
  formularioEstudianteEditar: FormGroup;
  dataEstudiante=this.data;
  cursos: Curso[]=cursos;


  selectedOption:string =this.dataEstudiante.nombre_curso;
  constructor(
    public dialogRef: MatDialogRef<EditarEstudiantesComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.formularioEstudianteEditar = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]{2,3}$'), Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required]),
      id:new FormControl('',[Validators.required]),
      nombre_curso:new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.formularioEstudianteEditar.value);
  }

}
