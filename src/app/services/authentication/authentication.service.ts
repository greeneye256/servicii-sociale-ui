import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {first, map} from 'rxjs/operators';
import {ApplicationUser} from '../../model/applicationUser';
import {UserRole} from '../../model/userRole';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<ApplicationUser>;
  public currentUser: Observable<ApplicationUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // tslint:disable-next-line:prefer-const
    console.log('you are in login');
    const rolesToAssign = [];
    return this.http.post<any>(`server/login`, {username, password})
      .pipe(map(user => {
        const userRoles = user.roles.split(',');
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          for (let i = 0; i < userRoles.length; i++) {
            const role = userRoles[i];
            switch (role) {
              case ('ROLE_ADMIN'): {
                rolesToAssign.push(UserRole.ROLE_ADMIN);
                break;
              }
              case ('ROLE_USER'): {
                rolesToAssign.push(UserRole.ROLE_USER);
                break;
              }
              case ('ROLE_WRITE'): {
                rolesToAssign.push(UserRole.ROLE_WRITE);
                break;
              }
            }
          }
          user.roles = rolesToAssign;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);

        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
