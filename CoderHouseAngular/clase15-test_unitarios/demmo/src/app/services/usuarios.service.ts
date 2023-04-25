import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) {

  }
  obtenerUsuarios(){
    return this.http.get('https://635dd1df03d2d4d47ae37a8b.mockapi.io/usuarios');
  }
}
