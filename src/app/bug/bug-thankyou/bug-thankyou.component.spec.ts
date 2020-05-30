import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugThankyouComponent } from './bug-thankyou.component';

describe('BugThankyouComponent', () => {
  let component: BugThankyouComponent;
  let fixture: ComponentFixture<BugThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
