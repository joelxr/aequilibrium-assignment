import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleInputComponent } from './battle-input.component';

describe('BattleInputComponent', () => {
  let component: BattleInputComponent;
  let fixture: ComponentFixture<BattleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
