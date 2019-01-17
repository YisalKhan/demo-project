import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { EditUsersComponent } from './edit-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../shared/users.service';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;
  let fixture: ComponentFixture<EditUsersComponent>;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      declarations: [ EditUsersComponent ],
      providers: [UsersService]
    })
    .compileComponents();
    userService = TestBed.get(UsersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should inject Users Service', inject([UsersService], (injectedService: UsersService) => {
    expect(injectedService).toBe(userService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
