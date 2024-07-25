import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPassword } from '../models/ipassword';
import { PasswordEntity } from '../models/passwordentity';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'https://localhost:7203/api/Password';
  private getPasswordByNameApiUrl = 'https://localhost:7203/api/Password/name'// Replace with your API URL

  constructor(private http: HttpClient) { }

  getPasswords(): Observable<IPassword[]> {
    return this.http.get<IPassword[]>(this.apiUrl);
  }

  searchPasswords(name: string): Observable<IPassword[]> {
    return this.http.get<IPassword[]>(`${this.getPasswordByNameApiUrl}/namePassword=${name}`);
  }
  addPassword(passwordEntity: PasswordEntity): Observable<any> {
    return this.http.post(this.apiUrl, passwordEntity);
  }
  }

