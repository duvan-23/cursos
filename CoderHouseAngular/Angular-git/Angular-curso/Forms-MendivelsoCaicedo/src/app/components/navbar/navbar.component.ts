import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {Persona} from 'src/app/models/persona';
import {Tienda} from 'src/app/models/tiendas';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() listaPersonas!: Persona[];
  @Input() listaTiendas!: Tienda[];

  constructor() { }

  ngOnInit(): void {
  }

}
