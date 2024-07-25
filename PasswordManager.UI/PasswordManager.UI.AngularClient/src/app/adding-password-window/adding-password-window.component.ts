import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IPassword } from '../models/ipassword';
import { PasswordService } from '../services/passwordservice ';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModalService } from '../services/modalservice';
import { PasswordEntity } from '../models/passwordentity';

@Component({
  selector: 'app-adding-password-window',
  templateUrl: './adding-password-window.component.html',
  styleUrl: './adding-password-window.component.css'
})
export class AddingPasswordWindowComponent implements OnInit, OnDestroy {
  isOpen = false;
  private modalSubscription!: Subscription;
  private passwordSubscription!: Subscription;
  passwordData!: IPassword;
  name: string = '';
  password: string = '';
  type: string = 'site';

  constructor(private modalService: ModalService, private passwordService : PasswordService ) { }
  ngOnInit() {
    this.modalSubscription = this.modalService.isModalOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    this.passwordSubscription = this.modalService.currentPassword$.subscribe(password => {
      if (password) {
        this.name = password.name;
        this.password = password.password;
        this.type = password.typePassword;
      } else {
        this.resetForm();
      }
    });
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
    this.passwordSubscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  onSubmit() {
    const passwordEntity: PasswordEntity = {
      id: 0,
      name: this.name,
      password: this.password,
      typePassword: this.type,
      creationTime: new Date()
    };

    this.passwordService.addPassword(passwordEntity).subscribe(response => {
      console.log('Password added successfully:', response);
    }, error => {
      console.error('Error adding password:', error);
    });
  
    this.closeModal();
  }

  resetForm() {
    this.name = '';
    this.password = '';
    this.type = 'site';
  }
}


