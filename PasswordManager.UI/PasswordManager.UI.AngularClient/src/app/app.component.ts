import { Component, ElementRef, ViewChild } from '@angular/core';
import { PasswordListComponent } from './password-list/password-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Password Manager'
 

  reloadPasswords(passwordList: PasswordListComponent): void {
    passwordList.loadPasswords();
  }
}
