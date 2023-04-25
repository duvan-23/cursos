import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
import { OficinasService } from 'src/app/services/oficinas.service';
import { TiendasService } from 'src/app/services/tiendas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
