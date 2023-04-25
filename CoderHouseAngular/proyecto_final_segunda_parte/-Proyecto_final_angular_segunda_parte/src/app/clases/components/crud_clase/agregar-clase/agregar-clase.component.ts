import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef } from '@angular/material/dialog';
import { cursos } from 'src/app/datos/cursos';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-agregar-clase',
  templateUrl: './agregar-clase.component.html',
  styleUrls: ['./agregar-clase.component.css']
})
export class AgregarClaseComponent implements OnInit {

  formularioClase: FormGroup;
  cursos: Curso[]=cursos;
  constructor(
    public dialogRef: MatDialogRef<AgregarClaseComponent>,
    private fb: FormBuilder
    ) {
    this.formularioClase = fb.group({
      nombre: new FormControl('',[Validators.required]),
      comision: new FormControl('',[Validators.required]),
      profesor: new FormControl('',[Validators.required]),
      inscripcionAbierta: new FormControl('',[]),
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(this.formularioClase.value);
  }

}
