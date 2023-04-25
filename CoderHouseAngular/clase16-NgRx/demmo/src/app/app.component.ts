import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from './models/cursos';
import { CursosService } from './services/cursos.service';
import { cargarCursos, cursosCargados } from './state/actions/cursos.action';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demmo';

  constructor(
    private cursoService: CursosService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(cargarCursos());
  }
  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) =>{
      console.log("Actualizando el store");
      this.store.dispatch(cursosCargados({cursos:cursos}));
      console.log("se agregaron los cursos al store");
    })
  }
}
