import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Clase{
  nombre: string;
  profesor: string;
}

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {
  clase: Clase ={
    nombre: '',
    profesor: ''
  }
  @ViewChild('formularioClase') formularioClasERef!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  agregarClase(){
    console.log(this.formularioClasERef.nativeElement);
  }
}


