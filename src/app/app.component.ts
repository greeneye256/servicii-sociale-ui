import {Component} from '@angular/core';
import {ApplicationUser} from './model/applicationUser';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.personsForThisDay = 10;
    this.personsInCare = 4;
    this.personsToBeHandled = 6;
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if (this.currentUser) {
        this.name = this.currentUser.username;
      } else {
        this.name = '';
      }
    });
  }

  get isAuthenticated() {
    return this.currentUser;
  }

  get isAdmin() {
    return this.getRole('ROLE_ADMIN');
  }

  get isWrite() {
    return this.getRole('ROLE_WRITE');
  }

  get isUser() {
    return this.getRole('ROLE_USER');
  }

  title = 'volunteers-ui';
  currentUser: ApplicationUser;
  name: string;
  personsForThisDay: number;
  personsInCare: number;
  personsToBeHandled: number;

  getRole(role: string) {
    if (!this.currentUser) {
      return false;
    }

    for (const userRole of this.currentUser.roles) {
      if (role !== userRole.name) {
      } else {
        return true;
      }
    }
    return false;
  }

  logout() {
    this.authenticationService.logout();
    this.name = '';
    this.router.navigate(['/login']);
  }
}
