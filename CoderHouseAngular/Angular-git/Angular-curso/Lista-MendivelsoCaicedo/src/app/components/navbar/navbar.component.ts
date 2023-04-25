import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listaTiendas:Array<Tienda>=[
    {nombre:'Central',tienda:1,activa:true},
    {nombre:'Avenida 12',tienda:2,activa:false},
  ];

  listaPersonas:Array<Persona>=[
    {nombre:'Juan Garcia',cargo: 'Jefe',tienda:1},
    {nombre:'David Diaz',cargo: 'Encargado',tienda:1},
    {nombre:'Pablo Perez',cargo: 'Operario',tienda:1},
    {nombre:'Sandra Lopez',cargo: 'Jefe',tienda:2},
    {nombre:'Fredy Mendez',cargo: 'Encargado',tienda:2},
    {nombre:'Camilo Saenz',cargo: 'Operario',tienda:2},
    {nombre:'Andrea Sanchez',cargo: 'Operario',tienda:1},
    {nombre:'Rafael Ruiz',cargo: 'Operario',tienda:2}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
