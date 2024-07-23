import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  passwordName: string = '';

  @Output() search = new EventEmitter<string>();
  @Output() add = new EventEmitter<void>();

  findPassword(): void {
    this.search.emit(this.passwordName);
  }

  openAddPasswordModal(): void {
    this.add.emit();
  }
  onSearch(passwordName : string) {

  }
}
