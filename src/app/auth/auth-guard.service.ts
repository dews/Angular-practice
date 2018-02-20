import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (this.authService.isAuthenticated()) {
                    resolve(true);
                } else {
                    this.router.navigate(['/signin']);
                    resolve(false);
                }
            }, 500);
        });
    }
    canLoad(route: Route): boolean {
        return this.authService.isAuthenticated();
    }
}
