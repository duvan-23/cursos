import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }
  obtenerEstudiantes(){
    return  [
      {
        nombre:'Pablo',
        apellido:'Garcia',
        usuario:'pgarcia',
        contraseña:'123'
      },{
        nombre:'Luis',
        apellido:'Florez',
        usuario:'lflorez',
        contraseña:'123'
      }
    ];
  }
}
