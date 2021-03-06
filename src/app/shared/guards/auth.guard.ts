import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate{

    constructor(
        private auth: AuthService,
        private router: Router
    ){
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ){
        if(this.auth.isAuthenticated) {
            return true;
        }
        this.router.navigateByUrl('login');
        return false;
    }
}