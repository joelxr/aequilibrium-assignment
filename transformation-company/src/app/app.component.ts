import { Component } from '@angular/core';
import { Transformer } from '../shared/types/transformer';
import parseTransformers from '../shared/util/parseTrasformers';
import { fight } from '../battle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transformation-company';

  battleInput = '';
  battleInputError = false;
  battleResult = [];

  startBattle(): void {
    if (!this.battleInputError) {
      fight(parseTransformers(this.battleInput));
    }
  }
}
