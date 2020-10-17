import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-battle-result',
  templateUrl: './battle-result.component.html',
  styleUrls: ['./battle-result.component.scss']
})
export class BattleResultComponent implements OnInit {

  @Input()
  result: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }
}
