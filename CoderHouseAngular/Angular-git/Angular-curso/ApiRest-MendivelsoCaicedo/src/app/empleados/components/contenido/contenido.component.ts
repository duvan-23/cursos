import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
import { CargosService } from 'src/app/core/services/cargos.service';
import { OficinasService } from 'src/app/core/services/oficinas.service';
import { TiendasService } from 'src/app/core/services/tiendas.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  formularioEmpleado: FormGroup;
  listaPersonas$!: Observable<Persona[]>;
  listaTiendas$!: Observable<Tienda[]>;
  listaCargos!:Array<string>;
  constructor(
    private fb: FormBuilder,
    private oficinasService:OficinasService,
    private tiendasService:TiendasService,
    private cargosService:CargosService,
    private router: Router
  ) {
    this.formularioEmpleado = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[A-Za-z0-9]+@[A-Za-z]+\\.[A-Za-z]{2,3}$'), Validators.required]),
      cargo: new FormControl('',[Validators.required]),
      tienda: new FormControl('',[Validators.required])
    });
    this.cargosService.obtenerCargosObservable().then((valor: Array<string>)=>{
      this.listaCargos= valor;
    }).catch((error: any)=>{
      console.error(error);
    })
    this.listaPersonas$= this.oficinasService.obtenerPersonasObservable();
    this.listaTiendas$= this.tiendasService.obtenerPersonasObservable();
  }

  ngOnInit(): void {

  }

  agregarEmpleado(){
    let empleado={
      id:0,
      nombre:this.formularioEmpleado.value.nombre,
      cargo:this.formularioEmpleado.value.cargo,
      correo:this.formularioEmpleado.value.correo,
      tienda:this.formularioEmpleado.value.tienda
    };
    this.oficinasService.agregarCurso(empleado);
    this.formularioEmpleado.reset();
    this.router.navigate(['empleados/listar']);
  }
}
