import { Transformer } from '../types/transformer';
import { FaceOffResult } from '../types/faceOffResult';

/**
 * If one of the fighters is 3 or more points of skill above their opponent, they win
 * the fight regardless of the overall rating
 */
export default function getWinnerByBeingMoreSkilled(t1: Transformer, t2: Transformer): FaceOffResult {
  if (!t1 || !t2) {
    return null;
  }

  const diff = t1.difference(t2);
  const t1HasAdvantage = Object.values(diff).filter(d => d >= 3).length;
  const t2HasAdvantage = Object.values(diff).filter(d => d <= -3).length;

  if (t1HasAdvantage > t2HasAdvantage) {
    return { winner: t1, loser: t2 };
  } else if (t2HasAdvantage > t1HasAdvantage) {
    return { winner: t2, loser: t1 };
  }
}
