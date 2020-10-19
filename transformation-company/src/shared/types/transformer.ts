import { TransformerDifference } from './transformerDifference';
import { Team } from './enums/team';

export class Transformer {
  name: string;
  team: Team;
  strength: number;
  intelligence: number;
  speed: number;
  endurance: number;
  rank: number;
  courage: number;
  firepower: number;
  skill: number;

  constructor(
    name: string,
    team: Team,
    strength: number,
    intelligence: number,
    speed: number,
    endurance: number,
    rank: number,
    courage: number,
    firepower: number,
    skill: number
  ) {
    this.name = name;
    this.team = team;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.endurance = endurance;
    this.rank = rank;
    this.courage = courage;
    this.firepower = firepower;
    this.skill = skill;
  }

  get overallRating(): number {
    return this.strength + this.intelligence + this.speed + this.endurance + this.endurance;
  }

  get isSuperior(): boolean {
    return /(OPTIMUS PRIME|PREDAKING)/gi.test(this.name);
  }

  difference(other: Transformer): TransformerDifference {
    return {
      courage: this.courage - other.courage,
      intelligence: this.intelligence - other.intelligence,
      speed: this.speed - other.speed,
      endurance: this.endurance - other.endurance,
      rank: this.rank - other.rank,
      strength: this.strength - other.strength,
      firepower: this.firepower - other.firepower,
      skill: this.skill - other.skill
    };
  }

  rankComparator(other: Transformer): number {
    if (this.rank > other.rank) {
      return -1;
    } else if (this.rank < other.rank) {
      return 1;
    } else {
      return 0;
    }
  }
}
