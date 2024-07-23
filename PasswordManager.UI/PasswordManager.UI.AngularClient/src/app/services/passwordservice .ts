import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPasssword } from '../models/ipassword';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'https://localhost:7203/api/Password';
  private getPasswordByNameApiUrl = 'https://localhost:7203/api/Password/name'// Replace with your API URL

  constructor(private http: HttpClient) { }

  getPasswords(): Observable<IPasssword[]> {
    return this.http.get<IPasssword[]>(this.apiUrl);
  }

  searchPasswords(name: string): Observable<IPasssword[]> {
    return this.http.get<IPasssword[]>(`${this.getPasswordByNameApiUrl}/namePassword=${name}`);
  }

  addPassword(password: IPasssword): Observable<void> {
    return this.http.post<void>(this.apiUrl, password);
  }
  }

