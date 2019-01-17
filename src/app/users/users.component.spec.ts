import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { Users } from '../shared/users.module';
import { UsersService } from '../shared/users.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let testbedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ UsersComponent ],
      providers: [UsersService]
    })
    .compileComponents();
    testbedService = TestBed.get(UsersService);
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
  }))
});
