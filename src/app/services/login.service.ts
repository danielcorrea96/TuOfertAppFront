import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoginURL = 'http://localhost:8090/personas/login';
  constructor(private http: HttpClient) {
    console.log('Hola desde login');
   }

   postLogin( login: any ): Observable<any> {
    return this.http.post(this.LoginURL, login);
  }
}
