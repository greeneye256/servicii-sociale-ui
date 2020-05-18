import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class SocialCaseService {

  constructor(private http: HttpClient) {
  }

  getSocialCases() {
    return this.http.get('server/api/v1/socialCases');
  }

  getSocialCase(id: string) {
    return this.http.get('server/api/v1/socialCases/' + id);
  }

  createSocialCase(socialCase) {
    alert('esti in social case service');
    const body = JSON.stringify(socialCase);
    return this.http.post('server/api/v1/socialCases', body, httpOptions);
  }

  updateSocialCase(socialCase) {
    const id = socialCase.id;
    return this.http.put('server/api/v1/socialCases/' + id, socialCase, httpOptions);
  }

  deleteSocialCaseById(id: string) {
    return this.http.delete('server/api/v1/socialCases/' + id);
  }
}
