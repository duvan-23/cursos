import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Tienda } from 'src/app/models/tiendas';
import { ContenidoComponent } from '../contenido/contenido.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @ViewChild(ContenidoComponent) componenteContenidoHijo!: ContenidoComponent;//acceder al componente hijo y poder modificar directamente
  listaPersonasPadre:Array<Persona>=[
    {nombre:'Juan Garcia',cargo: 'Jefe',correo:'juan@hotmail.com',tienda:1},
    {nombre:'David Diaz',cargo: 'Encargado',correo:'david@hotmail.com',tienda:1},
    {nombre:'Pablo Perez',cargo: 'Operario',correo:'pablo@hotmail.com',tienda:1},
    {nombre:'Sandra Lopez',cargo: 'Jefe',correo:'sandra@hotmail.com',tienda:2},
    {nombre:'Fredy Mendez',cargo: 'Encargado',correo:'fredy@hotmail.com',tienda:2},
    {nombre:'Camilo Saenz',cargo: 'Operario',correo:'camilo@hotmail.com',tienda:2},
    {nombre:'Andrea Sanchez',cargo: 'Operario',correo:'andrea@hotmail.com',tienda:1},
    {nombre:'Rafael Ruiz',cargo: 'Operario',correo:'rafael@hotmail.com',tienda:2}
  ];
  listaTiendasPadre:Array<Tienda>=[
    {nombre:'Central',tienda:1,activa:true},
    {nombre:'Avenida 12',tienda:2,activa:false},
  ];
  listaCargosPadre:Array<string>=["Jefe","Encargado","Operario"];
  constructor() { }

  ngOnInit(): void {
  }
  agregarEmpleadoPadre(empleado: Persona){
    // empleado.nombre= this.componenteContenidoHijo.nombre;
    this.listaPersonasPadre.push(empleado);
  }
}
