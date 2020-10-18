import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { BattleResult } from '../types/battleResult';

export default function generateWalkoverResult(winningTeam: Team, winners: Array<Transformer>): BattleResult {
  return new BattleResult(
    0,
    winningTeam,
    winners,
    winningTeam === Team.DECEPTICON ?  Team.AUTOBOT : Team.DECEPTICON,
    null,
    null,
    `W.O. victory! ${winningTeam === Team.AUTOBOT ? 'Decepticons' : 'Autobots'} didn't showed up!`
  );
}
