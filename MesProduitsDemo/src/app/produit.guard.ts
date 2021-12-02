import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard implements CanActivate {
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  constructor (private authService: AuthService,
               private router : Router) {}
               
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
      return true;
  else
  {
      this.router.navigate(['forbidden']);
      return false;
  }

  }

}
