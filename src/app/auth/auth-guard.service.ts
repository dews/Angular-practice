import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            if (this.authService.isAuthenticated()) {
                resolve(true);
            } else {
                const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                    unsubscribe();
                    if (user) {
                        resolve(true);
                    } else {
                        this.router.navigate(['/signin']);
                        resolve(false);
                    }
                });
            }
        });
    }
    canLoad(route: Route): boolean {
        return this.authService.isAuthenticated();
    }
}
