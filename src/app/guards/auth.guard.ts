import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {ApplicationUser} from '../model/applicationUser';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: ApplicationUser;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    // this.currentUser = this.authenticationService.currentUserValue;
    // console.log(this.currentUser + 'in guard constructor');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.currentUser = this.authenticationService.currentUserValue;
    console.log(this.currentUser + 'in guard in can activate');
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
      console.log('can activate before /home');
      this.router.navigate(['/home']);
      return false;
    }
    console.log('can activate before /login');
    this.router.navigate(['/login']);
    return false;
  }
}

