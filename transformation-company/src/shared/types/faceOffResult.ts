import { Transformer } from '../types/transformer';

export class FaceOffResult {
  winner?: Transformer;
  loser?: Transformer;
  tie?: boolean;
}
