import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cargos } from '../datos/cargos';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  cargos: Array<string>=cargos;
  cargosSubject: BehaviorSubject<Array<string>>;
  constructor() {
    this.cargosSubject = new BehaviorSubject<Array<string>>(this.cargos);
  }

  obtenerCargosObservable(): Promise<Array<string>> | any{
    return new Promise((resolve, reject)=>{
      if(this.cargos.length > 0){
        resolve(this.cargos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cargos disponibles en este momento'
        })
      }
    });
  }
}
