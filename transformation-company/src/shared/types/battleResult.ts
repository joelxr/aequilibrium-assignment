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

  constructor(
    turns: number,
    winnerTeam: Team,
    winners: Array<Transformer>,
    loserTeam: Team,
    losers: Array<Transformer>,
    survivors: Array<Transformer>,
    message: string
  ) {
    this.turns = turns;
    this.winner = {
      team: winnerTeam,
      members: winners
    };
    this.loser = {
      team: loserTeam,
      members: losers,
      survivors
    };
    this.message = message;
  }

  get winnersSentence(): string {
    if (this.winner && this.winner.team && this.winner.members && this.winner.members.length) {
      const teamName = this.winner.team === Team.AUTOBOT ? 'Autobots' : 'Decepticons';
      const membersNames = this.winner.members.map(m => m.name).join(', ');
      return `Winning team (${teamName}): ${membersNames}.`;
    } else {
      return '';
    }
  }

  get losersSentence(): string {
    if (this.loser && this.loser.team && this.loser.survivors && this.loser.survivors.length) {
      const teamName = this.loser.team === Team.AUTOBOT ? 'Autobots' : 'Decepticons';
      const membersNames = this.loser.survivors.map(m => m.name).join(', ');
      return `Survivors from the losing team (${teamName}): ${membersNames}.`;
    } else {
      return '';
    }
  }
}
