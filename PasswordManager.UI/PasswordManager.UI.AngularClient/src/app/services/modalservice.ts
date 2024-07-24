import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _isModalOpen = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this._isModalOpen.asObservable();

  openModal() {
    this._isModalOpen.next(true);
  }

  closeModal() {
    this._isModalOpen.next(false);
  }
}
