import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBirthComponent } from './player-birth.component';

describe('PlayerBirthComponent', () => {
  let component: PlayerBirthComponent;
  let fixture: ComponentFixture<PlayerBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
