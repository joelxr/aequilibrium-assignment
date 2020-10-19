import { Team } from './shared/types/enums/team';
import { Transformer } from './shared/types/transformer';
import { TransformerDifference } from './shared/types/transformerDifference';
import { BattleResult } from './shared/types/battleResult';
import { FaceOffResult } from './shared/types/faceOffResult';

import { fight } from './battle';

describe('fight', () => {
  it('no competitors', () => {
    const expected = new BattleResult(0, null, null, null, null, null, 'No competitors');
    expect(fight([])).toEqual(expected);
  });

  it('WO Autobots', () => {
    const transformers = [
      new Transformer('T1', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      0,
      Team.AUTOBOT,
      transformers,
      Team.DECEPTICON,
      null,
      null,
      `W.O. victory! Decepticons didn't showed up!`
    );
    expect(result).toEqual(expected);
  });

  it('WO Decepticons', () => {
    const transformers = [
      new Transformer('T1', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      0,
      Team.DECEPTICON,
      transformers,
      Team.AUTOBOT,
      null,
      null,
      `W.O. victory! Autobots didn't showed up!`
    );
    expect(result).toEqual(expected);
  });

  it('a tie', () => {
    const transformers = [
      new Transformer('T1', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T2', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      1,
      null,
      null,
      null,
      null,
      null,
      'A TIE!!'
    );

    expect(result).toEqual(expected);
  });

  it('wins having Predaking', () => {
    const transformers = [
      new Transformer('Predaking', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T2', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      1,
      Team.DECEPTICON,
      [new Transformer('Predaking', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)],
      Team.AUTOBOT,
      [new Transformer('T2', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)],
      [],
      null
    );

    expect(result).toEqual(expected);
  });

  it('wins having Predaking, but has survivors', () => {
    const transformers = [
      new Transformer('Predaking', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T2', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T3', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      1,
      Team.DECEPTICON,
      [new Transformer('Predaking', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)],
      Team.AUTOBOT,
      [
        new Transformer('T2', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1),
        new Transformer('T3', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
      ],
      [new Transformer('T3', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)],
      null
    );

    expect(result).toEqual(expected);
  });


  it('wins having Optimus Prime', () => {
    const transformers = [
      new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      1,
      Team.AUTOBOT,
      [new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)],
      Team.DECEPTICON,
      [new Transformer('T2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)],
      [],
      null
    );

    expect(result).toEqual(expected);
  });

  it('wins having Optimus Prime, but has survivors', () => {
    const transformers = [
      new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('T3', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      1,
      Team.AUTOBOT,
      [new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)],
      Team.DECEPTICON,
      [
        new Transformer('T2', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
        new Transformer('T3', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)
      ],
      [new Transformer('T3', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1)],
      null
    );

    expect(result).toEqual(expected);
  });

  it('destruction error', () => {
    const transformers = [
      new Transformer('Predaking', Team.DECEPTICON, 1, 1, 1, 1, 1, 1, 1, 1),
      new Transformer('Optimus Prime', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)
    ];

    const result = fight(transformers);
    const expected = new BattleResult(
      0,
      null,
      null,
      null,
      null,
      null,
      'Everything has been destroyed!'
    );

    expect(result).toEqual(expected);
  });
});

