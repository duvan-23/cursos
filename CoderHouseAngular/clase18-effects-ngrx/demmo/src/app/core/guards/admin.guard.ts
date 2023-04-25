import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/sesion';
import { SessionService } from '../services/session.service';
import { selectSessionActiva } from '../state/session.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private store: Store<Session>,
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectSessionActiva).pipe(
        map((session: Session) =>{
          if(session.usuarioActivo?.admin){
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
