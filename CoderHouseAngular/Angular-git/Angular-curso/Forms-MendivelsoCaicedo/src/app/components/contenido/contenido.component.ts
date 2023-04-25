import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  formularioEmpleado: FormGroup;
  @Input() listaPersonas!: Persona[];
  @Input() listaTiendas!: Tienda[];
  @Input() listaCargos!: Array<string>;
  @Output() eventoSalidaPersona: EventEmitter<Persona> = new EventEmitter<Persona>();
  @ViewChild('formularioClase') formularioClasERef!: ElementRef;
  constructor(private fb: FormBuilder) {
    this.formularioEmpleado = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      cargo: new FormControl('',[Validators.required]),
      tienda: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    let empleado={
      nombre:this.formularioEmpleado.value.nombre,
      cargo:this.formularioEmpleado.value.cargo,
      correo:this.formularioEmpleado.value.correo,
      tienda:this.formularioEmpleado.value.tienda
    };
    this.eventoSalidaPersona.emit(empleado);
    this.formularioEmpleado.reset();
  }
}
