import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../shared/users.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SpyLocation } from '@angular/common/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let testbedService;
  let router: Router;
  let location: Location;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule],
      declarations: [ UsersComponent, EditUsersComponent ],
      providers: [UsersService]
    })
    .compileComponents();
    testbedService = TestBed.get(UsersService);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display New User Button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('Should Inject Users Service', inject([UsersService], (injectService : UsersService) => {
    expect(injectService).toBe(testbedService);
  }));

  it('should click the button', async(() => {
    spyOn(component, 'onNewUser');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onNewUser).toHaveBeenCalled();
    });
  }));

  it('navigate to ', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));
});
