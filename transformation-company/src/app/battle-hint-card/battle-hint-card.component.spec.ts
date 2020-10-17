import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleHintCardComponent } from './battle-hint-card.component';

describe('BattleHintCardComponent', () => {
  let component: BattleHintCardComponent;
  let fixture: ComponentFixture<BattleHintCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleHintCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleHintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
