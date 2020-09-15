import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerThankyouComponent } from './player-thankyou.component';

describe('PlayerThankyouComponent', () => {
  let component: PlayerThankyouComponent;
  let fixture: ComponentFixture<PlayerThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
