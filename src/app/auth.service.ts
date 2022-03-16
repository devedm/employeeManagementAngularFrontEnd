import { Injectable } from '@angular/core';
import { LoginResponseModel } from './login.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient : HttpClient) { }

  login (email: string, password: string) {
    const bearerToken = 'd50463e1-4a21-4227-9304-79f8004eafe8';
    const headers = new HttpHeaders ({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${bearerToken}`
    });

    const request = {
      email,
      password
    };

    // observable es como una promesa
    return this.httpClient.post<LoginResponseModel>(
      'https://ucreativa-edel.herokuapp.com/api/v1/auth/login',
      request,
      { headers }
    )
  }
}
