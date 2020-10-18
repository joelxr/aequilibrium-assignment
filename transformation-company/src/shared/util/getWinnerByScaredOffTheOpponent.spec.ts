import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';
import getWinnerByScaredOffTheOpponent from './getWinnerByScaredOffTheOpponent';

describe('getWinnerByScaredOffTheOpponent', () => {
  it('t1 wins, has more courage and strength', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 4, 1, 1, 1, 1, 5, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toEqual(expected);
  });

  it('t2 wins, has more courage and strength', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 4, 1, 1, 1, 1, 5, 1, 1);
    const expected: FaceOffResult = { winner: t2, loser: t1 };
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toEqual(expected);
  });

  it('t1 has more courage but no strength', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 5, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toBeUndefined();
  });

  it('t2 has more courage but no strength', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 5, 1, 1);
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toBeUndefined();
  });

  it('t1 has more strength but not enough courage', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 4, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toBeUndefined();
  });

  it('t2 has more strength but not enough courage', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 4, 1, 1, 1, 1, 1, 1, 1);
    const result = getWinnerByScaredOffTheOpponent(t1, t2);
    expect(result).toBeUndefined();
  });
});


