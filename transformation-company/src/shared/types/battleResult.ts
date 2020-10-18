import { Transformer } from './transformer';
import { Team } from './enums/team';

export class BattleResult {
  turns: number;
  winner?: {
    team: Team;
    members?: Array<Transformer>;
  };
  loser?: {
    team: Team;
    members?: Array<Transformer>;
    survivors?: Array<Transformer>;
  };
  message?: string;
}
