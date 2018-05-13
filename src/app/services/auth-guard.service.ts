import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuth) {
            console.log('Ok je laisse passer')
            return true;
        } else {
            console.log('Attention vous n"avez pas acces a cette ressource');
            this.router.navigate(['/auth']);
        return false;
        }
    }
}