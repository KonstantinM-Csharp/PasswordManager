import { Component, OnInit } from '@angular/core';
import { IPassword } from '../models/ipassword';
import { PasswordService } from '../services/passwordservice ';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css'] // Corrected property name
})
export class PasswordListComponent implements OnInit {
  passwords: IPassword[] = [];
  isModalOpen = false;

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.loadPasswords();
  }

  loadPasswords(): void {
    this.passwordService.getPasswords().subscribe(
      (data: IPassword[]) => this.passwords = data,
      (error: any) => console.error('Error fetching passwords', error)
    );
  }

  handleSearch(searchTerm: string): void {
    this.passwordService.searchPasswords(searchTerm).subscribe(
      (data: IPassword[]) => this.passwords = data,
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
