import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { BattleResult } from '../types/battleResult';

export default function generateWalkoverResult(winningTeam: Team, winners: Array<Transformer>): BattleResult {
  return {
    turns: 0,
    winner: {
      team: winningTeam,
      members: winners
    },
    loser: {
      team: winningTeam === Team.DECEPTICON ?  Team.AUTOBOT : Team.DECEPTICON
    },
    message: `W.O. victory! ${winningTeam === Team.AUTOBOT ? 'Decepticons' : 'Autobots'} didn't showed up!`
  };
}
