import { Component, OnInit } from '@angular/core';
import { IPasssword } from '../models/ipassword';
import { PasswordService } from '../services/passwordservice ';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css'] // Corrected property name
})
export class PasswordListComponent implements OnInit {
  passwords: IPasssword[] = [];
  isModalOpen = false;

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.loadPasswords();
  }

  loadPasswords(): void {
    this.passwordService.getPasswords().subscribe(
      (data: IPasssword[]) => this.passwords = data,
      (error: any) => console.error('Error fetching passwords', error)
    );
  }

  handleSearch(searchTerm: string): void {
    this.passwordService.searchPasswords(searchTerm).subscribe(
      (data: IPasssword[]) => this.passwords = data,
      (error: any) => console.error('Error searching passwords', error)
    );
  }

  openAddPasswordModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
