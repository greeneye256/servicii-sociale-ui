import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApplicationUser} from '../../model/applicationUser';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users;

  constructor(private http: HttpClient) {
  }

  userUrl = 'server/api/v1/users';

  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getById(id: string) {
    return this.http.get<ApplicationUser>(this.userUrl + '/' + id.toString());
  }

  createUser(applicationUser: ApplicationUser) {
    const body = JSON.stringify(applicationUser);
    return this.http.post(this.userUrl + '/sign-up', body, httpOptions );
  }

  deleteUserById(id: string) {
    return this.http.delete(this.userUrl + '/' + id);
  }

  updateUser(user) {
    const id: string = user.id;
    const body = JSON.stringify(user);
    alert('ati intrat in service member cu id de membru' + id);
    return this.http.put(this.userUrl + '/' + id, body, httpOptions);
  }
}
