import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private authService :AuthService){

  }
  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
    map(user =>{
      if(user && user.uid) {
        return true;
      }else{
        this.router.navigate([`home`]);
        return false;
      }
    }));
  }
}
