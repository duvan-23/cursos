import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista/lista.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [ContenidoComponent,ListaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
