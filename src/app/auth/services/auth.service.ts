import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../../config/api.config';
import { LoginResponseDto } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
