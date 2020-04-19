import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {ApplicationUser} from '../model/applicationUser';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: ApplicationUser;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.currentUser) {
      if (route.data.roles) {
        console.log(route.data.roles);
        console.log(this.currentUser.roles);
        for (const routeRole of route.data.roles) {
          console.log(routeRole);
          for (const userRole of this.currentUser.roles) {
            console.log(userRole);
            console.log(userRole.name + ' vs ' + routeRole.name);
            if (routeRole.name !== userRole.name) {
              console.log('not equal');
            } else {
              console.log('equal');
              return true;
            }
          }
        }
      } else {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

