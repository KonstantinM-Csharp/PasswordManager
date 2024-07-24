import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPassword } from '../models/ipassword';
import { ModalService } from '../services/modalservice';

@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent {
  @Input() password!: IPassword;
  @Output() editPassword = new EventEmitter<IPassword>();

  constructor(private modalService: ModalService) { }

  onEdit() {
    this.modalService.openModal(this.password);
  }
}
