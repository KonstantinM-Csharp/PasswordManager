import { Component, Input } from '@angular/core';
import { IPasssword } from '../models/ipassword';
import { ModalService } from '../services/ModalService';

@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent {
  @Input() password!: IPasssword;
  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
