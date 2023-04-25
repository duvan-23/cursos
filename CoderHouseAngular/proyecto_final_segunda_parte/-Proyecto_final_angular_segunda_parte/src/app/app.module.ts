import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';
import { ClasesModule } from './clases/clases.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { ClasesRoutingModule } from './clases/clases-routing.module';
import { EstudiantesRoutingModule } from './estudiantes/estudiantes-router.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    EstudiantesRoutingModule,
    ClasesRoutingModule,
    CursosRoutingModule,
    AppRoutingModule,
    EstudiantesModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CursosModule,
    ClasesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
