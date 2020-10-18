import { Team } from './shared/types/enums/team';
import { Transformer } from './shared/types/transformer';
import { TransformerDifference } from './shared/types/transformerDifference';
import { BattleResult } from './shared/types/battleResult';
import generateWalkoverResult from './shared/util/generateWalkOverResult';

function getWinnerByScaredOffTheOpponent(t1: Transformer, t2: Transformer, diff: TransformerDifference): Transformer {
  let winner: Transformer = null;

  if (diff.courage >= 4 && diff.strength >= 3) {
    winner = t1;
  } else if (diff.courage <= -4 && diff.strength <= -3) {
    winner = t2;
  }

  return winner;
}

function getWinnerByBeingMoreSkilled(t1: Transformer, t2: Transformer, diff: TransformerDifference): Transformer {
  const t1HasAdvantage = Object.values(diff).filter(d => d >= 3).length % 2;
  const t2HasAdvantage = Object.values(diff).filter(d => d <= -3).length % 2;

  if (t1HasAdvantage) {
    return t1;
  } else if (t2HasAdvantage) {
    return t2;
  } else {
    return null;
  }
}

function getWinnerByOverallRating(t1: Transformer, t2: Transformer): Transformer {
  if (t1.overallRating > t2.overallRating) {
    return t1;
  } else if (t2.overallRating > t2.overallRating ) {
    return t2;
  } else {
    return null;
  }
}


/**
 * Function to perform a single battle between two given fighters.
 * The result it's the winner of the battle considering all the rules,
 * in case of a tie the result will be null, there is no winner of
 * the battle.
 *
 * @param t1 One of the fighters
 * @param t2 The second fighter
 * @return winner The winner of this single battle, if it's null was a tie
 */
function faceOff(t1: Transformer, t2: Transformer): Transformer {
  const diff = t1.difference(t2);
  let winner = getWinnerByScaredOffTheOpponent(t1, t2, diff);

  if (winner) {
    return winner;
  }

  winner = getWinnerByBeingMoreSkilled(t1, t2, diff);

  if (winner) {
    return winner;
  }

  winner = getWinnerByOverallRating(t1, t2);
  return winner;
}

export function fight(transformers: Array<Transformer>): BattleResult {
  const autobots = transformers
    .filter(t => t.team === Team.AUTOBOT)
    .sort((t1, t2) => t1.rankComparator(t2));

  const deceptions = transformers
    .filter(t => t.team === Team.DECEPTICON)
    .sort((t1, t2) => t1.rankComparator(t2));

  console.log(autobots, deceptions);

  if (!!autobots.length && !!deceptions.length) {
    return {
      turns: 0,
      message: 'No competitors'
    };
  }

  if (!!autobots.length) {
    return generateWalkoverResult(Team.DECEPTICON, deceptions);
  }

  if (!!deceptions.length) {
    return generateWalkoverResult(Team.AUTOBOT, autobots);
  }

  if (autobots.length > deceptions.length) {

  }

  return null;
}
