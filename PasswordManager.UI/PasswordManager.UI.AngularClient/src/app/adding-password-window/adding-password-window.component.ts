import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IPasssword } from '../models/ipassword';
import { PasswordService } from '../services/passwordservice ';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModalService } from '../services/ModalService';

@Component({
  selector: 'app-adding-password-window',
  templateUrl: './adding-password-window.component.html',
  styleUrl: './adding-password-window.component.css'
})
export class AddingPasswordWindowComponent implements OnInit, OnDestroy {
  isOpen = false;
  private modalSubscription!: Subscription;

  title: string = '';
  password: string = '';
  type: string = 'site'; // default value

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalSubscription = this.modalService.isModalOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  onSubmit() {
    // Здесь можно добавить логику для сохранения пароля
    console.log('Title:', this.title);
    console.log('Password:', this.password);
    console.log('Type:', this.type);
    this.closeModal();
  }
}


