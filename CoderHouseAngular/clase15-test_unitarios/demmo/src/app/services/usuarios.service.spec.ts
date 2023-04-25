import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsuariosService } from './usuarios.service';
import { of } from 'rxjs';
describe('UsuariosService', () => {
  let httpClientSpy: {get: jasmine.Spy}
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('httpClientSpy', ['get']);
    service = new UsuariosService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
    const mockDatos =[
      {"usuario": "Era.Aufderhar28","contrasena": "fa3_GCMeajHf7Gf","admin": false,"canLoad": true,"canActivateChild": false,"id": "1"},
      {"usuario": "Nash95","contrasena": "eOU0I5kG2n9QpzO","admin": true,"canLoad": true,"canActivateChild": false,"id": "2"},
      {"usuario": "Van_Jenkins","contrasena": "76S_kgEZZ14crsz","admin": false,"canLoad": false,"canActivateChild": true,"id": "3"},
      {"usuario": "Emmet43","contrasena": "9fUW7vTkVPBK7uS","admin": false,"canLoad": true,"canActivateChild": true,"id": "4"},
      {"usuario": "Bailee_Bartell","contrasena": "qonSDjDVSHgitDk","admin": true,"canLoad": false,"canActivateChild": true,"id": "5"}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));// of para convertir el arreglo en tipo observable
    service.obtenerUsuarios().subscribe((usuarios) =>{
      const mockDatos2 =[
        {"usuario": "Era.Aufderhar28","contrasena": "fa3_GCMeajHf7Gf","admin": false,"canLoad": true,"canActivateChild": false,"id": "1"},
        {"usuario": "Nash95","contrasena": "eOU0I5kG2n9QpzO","admin": true,"canLoad": true,"canActivateChild": false,"id": "2"},
        {"usuario": "Van_Jenkins","contrasena": "76S_kgEZZ14crsz","admin": false,"canLoad": false,"canActivateChild": true,"id": "3"},
        {"usuario": "Emmet43","contrasena": "9fUW7vTkVPBK7uS","admin": false,"canLoad": true,"canActivateChild": true,"id": "4"},
        {"usuario": "Bailee_Bartell","contrasena": "qonSDjDVSHgitDk","admin": true,"canLoad": false,"canActivateChild": true,"id": "5"}
      ];
      expect(usuarios).toEqual(mockDatos2);
      done();
    });
  });
});
