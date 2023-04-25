import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulosDirective } from '../directives/titulos.directive';
import { MatriculaStyleDirective } from '../directives/matricula-style.directive';
import { MatriculasPipe } from '../pipes/matriculas.pipe';
import { NombresPipe } from '../pipes/nombres.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    TitulosDirective,
    MatriculaStyleDirective,
    MatriculasPipe,
    NombresPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    TitulosDirective,
    MatriculaStyleDirective,
    MatriculasPipe,
    NombresPipe,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
