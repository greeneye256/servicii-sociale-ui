import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {
  }

  getOrganizations() {
    return this.http.get('server/api/v1/organizations');
  }

  getOrganization(id: string) {
    return this.http.get('server/api/v1/organizations/' + id);
  }

  createOrganization(organization) {
    alert('esti in organization service');
    const body = JSON.stringify(organization);
    return this.http.post('server/api/v1/organizations', body, httpOptions);
  }

  updateOrganization(organization) {
    const id = organization.id;
    return this.http.put('server/api/v1/organizations/' + id, organization, httpOptions);
  }

  deleteOrganizationById(id: string) {
    return this.http.delete('server/api/v1/organizations/' + id);
  }
}
