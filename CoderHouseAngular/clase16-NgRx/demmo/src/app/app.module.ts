import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { CursosComponent } from './component/cursos/cursos.component';
import { ListaCursosComponent } from './component/lista-cursos/lista-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './component/inicio/inicio.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ListaCursosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production,name: "Prueba NgRx clase Angular" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
