import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LoginRequest {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl + '/api/Auth';
  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, request);
  }
}
