import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../interface/response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get<any>(environment.api + '/users', { 'headers': this.headers });
  }

}
