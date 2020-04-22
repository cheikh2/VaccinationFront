import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor( private http:HttpClient) { }
  registre(user:User) {
    return this.http.post<User>(`${environment.apiUrl}/api/users`, user)
  }


  listeroles() {
    return this.http.get(`${environment.apiUrl}/api/roles`)
  }

  listeRegistre() {
    return this.http.get(`${environment.apiUrl}/api/users`)
  }

  getRole() {
    // now returns an Observable of Config
    return this.http.get<Role>(`${environment.apiUrl}/api/roles`);
  }
}



