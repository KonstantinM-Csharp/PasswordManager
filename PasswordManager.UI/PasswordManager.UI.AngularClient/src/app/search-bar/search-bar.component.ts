import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../services/ModalService';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  passwordName: string = '';

  @Output() search = new EventEmitter<string>();

  findPassword(): void {
    this.search.emit(this.passwordName);
  }
  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.openModal();
  }
}
