import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-hint-card',
  templateUrl: './battle-hint-card.component.html',
  styleUrls: ['./battle-hint-card.component.scss']
})
export class BattleHintCardComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }
}
