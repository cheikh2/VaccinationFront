import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import * as jwt_decode  from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private router: Router, private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAuthRights():boolean{
    return true;
  }


login(user:User){
  return this.http.post<User>(`${environment.apiUrl}/login_check`,user).
  pipe(map(data => {

    const decoded = jwt_decode(data.token);
     console.log(decoded);
  localStorage.setItem("token",data.token);
   //localStorage.setItem("user",JSON.stringify(data));
   localStorage.setItem("roles",JSON.stringify(decoded.roles));
   //localStorage.setItem("name",JSON.stringify(decoded.nom));




   // localStorage.setItem('token', JSON.stringify(decoded));

    localStorage.setItem('currentUser', JSON.stringify(data));
   this.currentUserSubject.next(data);

    return user;
}));


}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
  this.router.navigate(['/login']);

}

}
