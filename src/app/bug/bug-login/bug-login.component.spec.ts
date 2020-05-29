import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugLoginComponent } from './bug-login.component';

describe('BugLoginComponent', () => {
  let component: BugLoginComponent;
  let fixture: ComponentFixture<BugLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
