import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-battle-input',
  templateUrl: './battle-input.component.html',
  styleUrls: ['./battle-input.component.scss']
})
export class BattleInputComponent implements OnInit {

  @Output()
  battleDataInput: EventEmitter<string>;

  constructor() {
    this.battleDataInput = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onInputData(event): void {
    this.battleDataInput.emit(event.target.value);
  }
}
