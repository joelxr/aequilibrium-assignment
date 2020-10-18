import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';

export default function getWinnerBySuperiority(t1: Transformer, t2: Transformer): FaceOffResult {
  if (t1.isSuperior && t2.isSuperior) {
    throw Error('Destruction error!');
  } else if (t1.isSuperior) {
    return {
      winner: t1,
      loser: t2
    };
  } else if (t2.isSuperior) {
    return {
      winner: t2,
      loser: t1
    };
  }
}
