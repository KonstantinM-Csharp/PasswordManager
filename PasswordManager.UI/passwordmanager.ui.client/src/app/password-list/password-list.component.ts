import { Component } from '@angular/core';
import { IPasssword } from '../models/ipassword';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrl: './password-list.component.css'
})
export class PasswordListComponent {
  passwords: IPasssword[] = [
    { id: 1, password: 'password123', name: 'first', creationtime: new Date(2024, 6, 22), typepassword: 'site' },
    { id: 2, password: 'password123', name: 'second', creationtime: new Date(2024, 6, 22), typepassword: 'email' },
    { id: 3, password: 'password123', name: 'third', creationtime: new Date(2024, 6, 22), typepassword: 'site' },
  ];
}
