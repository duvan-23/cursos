import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CursoService } from './services/curso.service';
import { CursoAplhaService } from './services/curso-aplha.service';
import { cursos } from './services/curso.data';
import { environment } from 'src/environments/environment';
import { config, token } from './config';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // {provide: CursoService, useExisting: CursoAplhaService},
    // {provide: CursoService, useClass: CursoAplhaService},
    // {provide: CursoService, useValue: cursos},
    // {provide: CursoService, useFactory: () =>{
    //   if(environment.proveedor == 'legacy'){
    //     return new CursoService();
    //   }else if(environment.proveedor =='experimental'){
    //     return new CursoAplhaService();
    //   }else if(environment.proveedor =='valor predefinido'){
    //     return cursos;
    //   }else{
    //     return new CursoService();
    //   }
    // }},
    {provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
