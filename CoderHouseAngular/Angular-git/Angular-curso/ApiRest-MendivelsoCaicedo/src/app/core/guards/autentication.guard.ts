import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Session } from 'src/app/models/session';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate {
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
            this.router.navigate(['/login']);
            return false
          }
        })
      );
  }
}
