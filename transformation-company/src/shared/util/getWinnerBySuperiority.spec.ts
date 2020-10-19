import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';
import getWinnerBySuperiority from './getWinnerBySuperiority';

const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);

describe('getWinnerBySuperiority', () => {
  it('"Optimus Prime" wins', () => {
    const t1 = new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"optimus prime" wins', () => {
    const t1 = new Transformer('optimus prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"OPTIMUS PRIME" wins', () => {
    const t1 = new Transformer('OPTIMUS PRIME', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"Predaking" wins', () => {
    const t1 = new Transformer('Predaking', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"predaking" wins', () => {
    const t1 = new Transformer('predaking', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"PREDAKING" wins', () => {
    const t1 = new Transformer('PREDAKING', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerBySuperiority(t1, t2);
    expect(result).toEqual(expected);
  });

  it('"PREDAKING vs OPTIMUS PRIME" wins', () => {
    const p = new Transformer('PREDAKING', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const op = new Transformer('OPTIMUS PRIME', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    expect(() => { getWinnerBySuperiority(p, op); }).toThrow(Error('Destruction error!'));
  });
});



