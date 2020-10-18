import { Component, EventEmitter, Output } from '@angular/core';
import parseTransformers from '../../shared/util/parseTrasformers';

@Component({
  selector: 'app-battle-input',
  templateUrl: './battle-input.component.html',
  styleUrls: ['./battle-input.component.scss']
})
export class BattleInputComponent {

  error: Error;
  dirty = false;

  @Output()
  battleDataInput: EventEmitter<string>;

  @Output()
  battleDataInputError: EventEmitter<Error>;

  constructor() {
    this.battleDataInput = new EventEmitter();
    this.battleDataInputError = new EventEmitter();
  }

  onInputData(event): void {
    this.dirty = true;
    const { value } = event.target;

    const validateInput = () => {
      try {
        parseTransformers(value);
        this.error = null;
        this.battleDataInputError.emit(null);
      } catch (err) {
        this.error = err;
        this.battleDataInputError.emit(err);
      }
    };

    this.battleDataInput.emit(value);
    validateInput();
  }
}
