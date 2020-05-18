import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) {
  }

  getVolunteers() {
    return this.http.get('server/api/v1/volunteers');
  }

  getVolunteer(id: string) {
    return this.http.get('server/api/v1/volunteers/' + id);
  }

  createVolunteer(volunteer) {
    alert('esti in branch service');
    const body = JSON.stringify(volunteer);
    return this.http.post('server/api/v1/volunteers', body, httpOptions);
  }

  updateVolunteer(volunteer) {
    const id = volunteer.id;
    return this.http.put('server/api/v1/volunteers/' + id, volunteer, httpOptions);
  }

  deleteVolunteerById(id: string) {
    return this.http.delete('server/api/v1/volunteers/' + id);
  }
}
