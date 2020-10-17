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
}

export enum Team {
  Autobot = 'A',
  Decepticon = 'D'
}

export function parse(input: string): Transformer {
  if (!input) {
    throw Error('Invalid input');
  }

  const data = input.split(',');

  if (data.length !== 10) {
    throw Error('Invalid input');
  }

  const parsed: Transformer = {
    name: data[0].trim(),
    team: data[1].trim() as Team,
    strength: Number(data[2]),
    intelligence: Number(data[3]),
    speed: Number(data[4]),
    endurance: Number(data[5]),
    rank: Number(data[6]),
    courage: Number(data[7]),
    firepower: Number(data[8]),
    skill: Number(data[9])
  };

  return parsed;
}
