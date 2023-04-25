import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
import { OficinasService } from 'src/app/core/services/oficinas.service';
import { TiendasService } from 'src/app/core/services/tiendas.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaPersonas$!: Observable<Persona[]>;
  listaTiendas$!: Observable<Tienda[]>;
  constructor(
    private oficinasService:OficinasService,
    private tiendasService:TiendasService
  ) {
    this.listaPersonas$= oficinasService.obtenerPersonasObservable();
    this.listaTiendas$= tiendasService.obtenerPersonasObservable();
  }

  ngOnInit(): void {
  }

}
