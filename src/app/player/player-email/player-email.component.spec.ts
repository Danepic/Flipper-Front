import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEmailComponent } from './player-email.component';

describe('PlayerEmailComponent', () => {
  let component: PlayerEmailComponent;
  let fixture: ComponentFixture<PlayerEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
