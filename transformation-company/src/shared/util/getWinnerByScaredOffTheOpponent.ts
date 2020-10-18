import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';

export default function getWinnerByScaredOffTheOpponent(t1: Transformer, t2: Transformer): FaceOffResult {
  const diff = t1.difference(t2);

  if (diff.courage >= 4 && diff.strength >= 3) {
    return {
      winner: t1,
      loser: t2
    };
  } else if (diff.courage <= -4 && diff.strength <= -3) {
    return {
      winner: t2,
      loser: t1
    };
  }
}

