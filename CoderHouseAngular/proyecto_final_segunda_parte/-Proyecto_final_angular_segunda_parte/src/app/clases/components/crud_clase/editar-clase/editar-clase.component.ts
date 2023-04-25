import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cursos } from 'src/app/datos/cursos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-clase',
  templateUrl: './editar-clase.component.html',
  styleUrls: ['./editar-clase.component.css']
})
export class EditarClaseComponent implements OnInit {
  dataClase=this.data;
  formularioClase: FormGroup;
  cursos: Curso[]=cursos;
  comision_read: boolean=true;
  constructor(
    public dialogRef: MatDialogRef<EditarClaseComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.formularioClase = fb.group({
      nombre: new FormControl('',[Validators.required]),
      comision: new FormControl('',[Validators.required]),
      profesor: new FormControl('',[Validators.required]),
      inscripcionAbierta: new FormControl('',[]),
      id:new FormControl('',[Validators.required]),
      imagen:new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.formularioClase.value);
  }

}
