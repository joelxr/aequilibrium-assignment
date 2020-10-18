import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';
import getWinnerByOverallRating from './getWinnerByOverallRating';

describe('getWinnerByOverallRating', () => {
  it('a tie', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const result: FaceOffResult = { tie: true };
    expect(getWinnerByOverallRating(t1, t2)).toEqual(result);
  });

  it('t1 wins', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 4, 4, 4, 4, 4, 4, 4, 4);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerByOverallRating(t1, t2);
    expect(result).toEqual(expected);
  });

  it('t2 wins', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 4, 4, 4, 4, 4, 4, 4, 4);
    const expected: FaceOffResult = { winner: t2, loser: t1 };
    const result = getWinnerByOverallRating(t1, t2);
    expect(result).toEqual(expected);
  });
});

