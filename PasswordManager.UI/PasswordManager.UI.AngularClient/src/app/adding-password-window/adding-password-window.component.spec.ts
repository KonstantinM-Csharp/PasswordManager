import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPasswordWindowComponent } from './adding-password-window.component';

describe('AddingPasswordWindowComponent', () => {
  let component: AddingPasswordWindowComponent;
  let fixture: ComponentFixture<AddingPasswordWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingPasswordWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddingPasswordWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
