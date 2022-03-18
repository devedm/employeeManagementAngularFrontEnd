import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeNamespace } from './employee.interface';

const bearerToken = 'd50463e1-4a21-4227-9304-79f8004eafe8';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(offset: number, limit: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    })
    // observable es como una promesa
    return this.httpClient.get<EmployeeNamespace.EmployeeResponseModel>(

      `https://ucreativa-edel.herokuapp.com/api/v1/staff?offset=${offset}&limit=${limit}`,

      { headers }
    );
  }

  delete(employeeUuid: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    });
    // observable es como una promesa
    return this.httpClient.delete(
      `https://ucreativa-edel.herokuapp.com/api/v1/staff/${employeeUuid}`,
      { headers }
    );
  }

  create(request: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    });
    // observable es como una promesa
    return this.httpClient.post<EmployeeNamespace.EmployeeResponseModel>(
      'https://ucreativa-edel.herokuapp.com/api/v1/staff',
      request,
      { headers }
    );
  }
}
