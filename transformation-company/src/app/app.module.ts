import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BattleInputComponent } from './battle-input/battle-input.component';
import { BattleResultComponent } from './battle-result/battle-result.component';
import { BattleHintCardComponent } from './battle-hint-card/battle-hint-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleInputComponent,
    BattleResultComponent,
    BattleHintCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
