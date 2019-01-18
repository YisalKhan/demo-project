import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EditUsersComponent } from './edit-users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../shared/users.service';
import { Users } from '../shared/users.module';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;
  let fixture: ComponentFixture<EditUsersComponent>;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule, FormsModule ],
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
    component.ngOnInit();
  });

  it('should inject Users Service', inject([UsersService], (injectedService: UsersService) => {
    expect(injectedService).toBe(userService);
  }));

  it('form should valid when empty', () => {
    expect(component.usersForm.valid).toBeFalsy();
  });

  it('name field should valid', () => {
    let name = component.usersForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.usersForm.controls['name'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

});
