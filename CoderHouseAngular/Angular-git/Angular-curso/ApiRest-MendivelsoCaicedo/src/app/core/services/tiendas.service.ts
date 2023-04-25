import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tiendas } from '../../datos/tiendas';
import { Tienda } from '../../models/tiendas';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  tiendas: Tienda[]=tiendas;
  tiendasSubject: BehaviorSubject<Tienda[]>;
  constructor() {
    this.tiendasSubject = new BehaviorSubject<Tienda[]>(this.tiendas);
  }

  obtenerPersonasObservable(){
    return this.tiendasSubject.asObservable();
  }

}
