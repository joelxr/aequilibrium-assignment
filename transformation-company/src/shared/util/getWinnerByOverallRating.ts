import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';

export default function getWinnerByOverallRating(t1: Transformer, t2: Transformer): FaceOffResult {
  if (t1.overallRating > t2.overallRating) {
    return {
      winner: t1,
      loser: t2
    };
  } else if (t2.overallRating > t1.overallRating ) {
    return {
      winner: t2,
      loser: t1
    };
  } else {
    return { tie: true };
  }
}
