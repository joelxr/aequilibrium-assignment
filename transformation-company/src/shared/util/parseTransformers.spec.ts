import { Team } from '../types/enums/team';
import { Transformer } from '../types/transformer';
import parseTransformers from './parseTrasformers';

describe('parseTransformers', () => {
  it('try to parse empty string', () => {
    expect(() => { parseTransformers(''); }).toThrow(Error('A valid input must be provided.'));
  });

  it('try to parse string with whitespaces', () => {
    expect(() => { parseTransformers(' '); }).toThrow(Error('A valid input must be provided.'));
  });

  it('try to parse string with not enough parameters', () => {
    expect(() => { parseTransformers('Name,A,1,1,1 '); })
      .toThrow(Error(
        'Couldn\'t parse line 1, missing parameters, should have 10 comma separeted values and got 5.'
      ));
  });

  it('try to parse with empty name', () => {
    expect(() => { parseTransformers(',A,1,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid name at line 1, got: ""'));
  });

  it('try to parse with wrong team', () => {
    expect(() => { parseTransformers('TEST,Z,1,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid team at line 1, got: "Z". Should be "A" or "D".'));
  });

  it('try to parse attribute more than 10', () => {
    expect(() => { parseTransformers('TEST,A,99,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid number at line 1, got: "99". Should be an integer between 0 and 10.'));
  });

  it('try to parse attribute less than 0', () => {
    expect(() => { parseTransformers('TEST,A,-3,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid number at line 1, got: "-3". Should be an integer between 0 and 10.'));
  });

  it('try to parse attribute not number', () => {
    expect(() => { parseTransformers('TEST,A,Z,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid number at line 1, got: "Z". Should be an integer between 0 and 10.'));
  });

  it('try to parse attribute floating point number', () => {
    expect(() => { parseTransformers('TEST,A,3.14,1,1,1,1,1,1,1 '); })
      .toThrow(Error('Invalid number at line 1, got: "3.14". Should be an integer between 0 and 10.'));
  });

  it('parse with success', () => {
    const expected = [new Transformer('TEST', Team.AUTOBOT, 1, 1, 1, 1, 1, 1, 1, 1)];
    expect(parseTransformers('TEST,A,1,1,1,1,1,1,1,1')).toEqual(expected);
  });
});
