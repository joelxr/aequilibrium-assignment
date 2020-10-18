import { Component } from '@angular/core';
import { Transformer } from '../shared/types/transformer';
import { BattleResult } from '../shared/types/battleResult';
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
  battleResult: BattleResult;

  startBattle(): void {
    if (!this.battleInputError) {
      this.battleResult = fight(parseTransformers(this.battleInput));
    }
  }
}
