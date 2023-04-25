import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {Estudiante} from '../../models/estudiante';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit, AfterViewInit{
  estudiantesPadre: Estudiante[]=[
    {nombre: 'Agustin', curso:'Angular'},
    {nombre: 'Jesica', curso:'Angular'},
    {nombre: 'Ijak', curso:'Angular'},
    {nombre: 'Jesus', curso:'Angular'}
  ]
  @ViewChild(ComponenteHijoComponent) componenteHijo!: ComponenteHijoComponent;//acceder al componente hijo y poder modificar directamente
  @ViewChild('mensaje') mensajePruebaRef!: HTMLElement; //getby id
  mensajeSalida:string ='';
  constructor(private deteccionCambios:ChangeDetectorRef) {
    console.log("Lamado desde el constructor ", this.componenteHijo);
  }

  ngOnInit(): void {
    console.log("Lamado desde el ngOnInit ", this.componenteHijo);
  }
  ngAfterViewInit(): void{
    console.log("Lamado desde el ngAfterViewInit ", this.componenteHijo);
    this.componenteHijo.usuarioActivo={nombre:"Pablo"};
    this.deteccionCambios.detectChanges();//para indicarle a Angular que hicimos cambios a una variable
    //de contenedor hijo y vuelva a validar, si no sale error debido a que estamos reasignando un valor
    console.log(this.mensajePruebaRef);
  }

  funcionPrueba(){
    alert("Hola mundo!");
  }
  manejarEventoSalida(mensaje: string){
    this.mensajeSalida= mensaje;
  }
  agregarEstudiante(estudiante: Estudiante){
    estudiante.nombre= this.componenteHijo.nombreEstudiante;
    this.estudiantesPadre.push(estudiante);
  }
}


