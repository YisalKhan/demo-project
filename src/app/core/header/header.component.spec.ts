import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in Header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('.navbar-brand').textContent).toContain('Demo Project');
  });
});
