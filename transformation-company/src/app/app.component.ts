import { Component } from '@angular/core';
import { parse, Transformer } from '../shared/types/transform';
import { fight } from '../battle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transformation-company';

  battleInput = '';
  battleResult = [];

  startBattle(): void {
    const lines = this.battleInput.split('\n');
    const transforms: Array<Transformer> = lines.map(l => parse(l));
    this.battleResult = fight(transforms);
  }
}
