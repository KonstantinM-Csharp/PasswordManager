import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPassword } from '../models/ipassword';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _isModalOpen = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this._isModalOpen.asObservable();

  private _currentPassword = new BehaviorSubject<IPassword | null>(null);
  currentPassword$ = this._currentPassword.asObservable();

  openModal(password?: IPassword) {
    this._currentPassword.next(password || null);
    this._isModalOpen.next(true);
  }

  closeModal() {
    this._isModalOpen.next(false);
  }
}
