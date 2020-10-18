import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';
import getWinnerByBeingMoreSkilled from './getWinnerByBeingMoreSkilled';

describe('getWinnerByBeingMoreSkilled', () => {
  it('none has advatanges', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    expect(getWinnerByBeingMoreSkilled(t1, t2)).toBeUndefined();
  });

  it('t1 has advantantages', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 4, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t1, loser: t2 };
    const result = getWinnerByBeingMoreSkilled(t1, t2);
    expect(result).toEqual(expected);
  });


  it('t2 has advantantages', () => {
    const t1 = new Transformer('t1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1);
    const t2 = new Transformer('t2', Team.DECEPTICON, 4, 1, 1, 1, 1, 1, 1, 1);
    const expected: FaceOffResult = { winner: t2, loser: t1 };
    const result = getWinnerByBeingMoreSkilled(t1, t2);
    expect(result).toEqual(expected);
  });
});
