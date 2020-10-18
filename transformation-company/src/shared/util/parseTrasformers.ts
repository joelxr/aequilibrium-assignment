import { Transformer } from '../types/transformer';
import { Team } from '../types/enums/team';

function validateLine(line: Array<string>, index: number): void {
  const [ name, team, strength, intelligence, speed, endurance, rank, courage, firepower, skill ] = line;

  if (!name || !name.trim()) {
    throw Error(`Invalid name at line ${index + 1}, got: "${name}"`);
  }

  if (!team || (team.trim().toUpperCase() !== 'A' && team.trim().toUpperCase() !== 'D')) {
    throw Error(`Invalid team at line ${index + 1}, got: "${team}". Should be "A" or "D".`);
  }

  const validaNumber = (num) => {
    if (typeof num === 'undefined' || num === '' || isNaN(Number(num)) || Number(num) < 0 || Number(num) > 10) {
      throw Error(`Invalid number at line ${index + 1}, got "${num}". Should be an integer between 0 and 10.`);
    }
  };

  validaNumber(strength);
  validaNumber(intelligence);
  validaNumber(speed);
  validaNumber(endurance);
  validaNumber(rank);
  validaNumber(courage);
  validaNumber(firepower);
  validaNumber(skill);
}

export default function parseTransformers(input: string): Array<Transformer> {
  if (!input) {
    throw Error('A valid input must be provided.');
  }

  const lines = input.split('\n');

  if (!lines.length) {
    throw Error('A valid input must be provided.');
  }

  const transformers = lines.map((line, index) => {
    const data = line.split(',');

    if (data.length !== 10) {
      throw Error(
        `Couldn't parse line ${index + 1}, missing parameters, should have 10 comma separeted values and got ${data.length}.`
      );
    }

    validateLine(data, index);

    const parsed = new Transformer(
      data[0].trim(),
      data[1].trim().toUpperCase() as Team,
      Number(data[2]),
      Number(data[3]),
      Number(data[4]),
      Number(data[5]),
      Number(data[6]),
      Number(data[7]),
      Number(data[8]),
      Number(data[9])
    );

    return parsed;
  });

  return transformers;

}
