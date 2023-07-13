import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const userName = prompt("Enter your name: ");
      // const password = prompt("Enter your password: ");

      setTimeout(() => {
        const isAuthenticated = userName === 'tarek' || userName === '';
        if (isAuthenticated) {
          observer.next(true);
          observer.complete();
        } else {
          // this.router.navigate(['/']);
          observer.next(false);
          observer.complete();
        }
      }, 3000);
    });
  }
}
