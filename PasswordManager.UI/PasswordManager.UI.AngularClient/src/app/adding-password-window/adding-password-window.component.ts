import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPasssword } from '../models/ipassword';
import { PasswordService } from '../services/passwordservice ';

@Component({
  selector: 'app-adding-password-window',
  templateUrl: './adding-password-window.component.html',
  styleUrl: './adding-password-window.component.css'
})
export class AddingPasswordWindowComponent {

  @Input() isOpen = true;
  @Output() onClose = new EventEmitter<void>();
  @Output() onAdd = new EventEmitter<void>();
  newPassword: IPasssword = {
    id: 0,
    name: '',
    password: '',
    creationTime: new Date(),
    typePassword: 'site'
  };

  constructor(private passwordService: PasswordService) { }

  closeModal(): void {
    this.isOpen = false;
    this.onClose.emit();
  }

  addPassword(): void {
    this.passwordService.addPassword(this.newPassword).subscribe(
      () => {
        this.onAdd.emit();
        this.closeModal();
      },
      (error: any) => console.error('Error adding password', error)
    );
  }
}


