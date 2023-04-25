import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private session: SessionService,
    private router:Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.obtenerSession().pipe(
      map((session: Session) =>{
        if(session.sessionActiva){
          return true
        }else{
          this.router.navigate(['autenticacion/login']);
          return false
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.session.obtenerSession().pipe(
        map((session: Session) =>{
          if(session.usuarioActivo?.canActivateChild){
            return true
          }else if(childRoute.routeConfig?.path=='listar'){//para que para esta ruta hija siempre la habilite pero las otras deben cumplir el true en la variable canActivateChild
            return true
          }else{
            alert("No tiene permisos para acceder a este sitio");
            this.router.navigate(['inicio']);
            return false
          }
        })
      );
      // para activar o desactivar todas las rutas hijas dependiendo de el valor en la variable canActivateChild
      // return this.session.obtenerSession().pipe(
      //   map((session: Session) =>{
      //     if(session.usuarioActivo?.canActivateChild){
      //       return true
      //     }else{
      //       alert("No tiene permisos para acceder a este sitio");
      //       this.router.navigate(['inicio']);
      //       return false
      //     }
      //   })
      // );
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.session.obtenerSession().pipe(
        map((session: Session) =>{
          if(session.usuarioActivo?.canLoad){
            return true
          }else{
            alert("No tiene permisos para acceder a este sitio");
            this.router.navigate(['inicio']);
            return false
          }
        })
      );
  }
}
