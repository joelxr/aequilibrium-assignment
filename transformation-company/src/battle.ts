import { Team } from './shared/types/enums/team';
import { Transformer } from './shared/types/transformer';
import { TransformerDifference } from './shared/types/transformerDifference';
import { BattleResult } from './shared/types/battleResult';
import { FaceOffResult } from './shared/types/faceOffResult';
import generateWalkoverResult from './shared/util/generateWalkOverResult';

function getWinnerBySuperiority(t1: Transformer, t2: Transformer): FaceOffResult {
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

function getWinnerByScaredOffTheOpponent(t1: Transformer, t2: Transformer, diff: TransformerDifference): FaceOffResult {
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

function getWinnerByBeingMoreSkilled(t1: Transformer, t2: Transformer, diff: TransformerDifference): FaceOffResult {
  const t1HasAdvantage = Object.values(diff).filter(d => d >= 3).length;
  const t2HasAdvantage = Object.values(diff).filter(d => d <= -3).length;

  if (t1HasAdvantage > t2HasAdvantage) {
    return {
      winner: t1,
      loser: t2
    };
  } else if (t2HasAdvantage > t1HasAdvantage) {
    return {
      winner: t2,
      loser: t1
    };
  }
}

function getWinnerByOverallRating(t1: Transformer, t2: Transformer): FaceOffResult {
  if (t1.overallRating > t2.overallRating) {
    return {
      winner: t1,
      loser: t2
    };
  } else if (t2.overallRating > t2.overallRating ) {
    return {
      winner: t1,
      loser: t2
    };
  } else {
    return { tie: true };
  }
}

/**
 * Function to perform a single battle between two given fighters.
 * The result it's the winner and loser of the battle considering all
 * rules.
 *
 * @param t1 One of the fighters
 * @param t2 The second fighter
 * @return FaceOffResult winner and loser of this single battle, can be a tie as well
 */
function faceOff(t1: Transformer, t2: Transformer): FaceOffResult {

  let result = getWinnerBySuperiority(t1, t2);

  if (result) {
    return result;
  }

  const diff = t1.difference(t2);
  result = getWinnerByScaredOffTheOpponent(t1, t2, diff);

  if (result) {
    return result;
  }

  result = getWinnerByBeingMoreSkilled(t1, t2, diff);

  if (result) {
    return result;
  }

  result = getWinnerByOverallRating(t1, t2);
  return result;
}

export function fight(transformers: Array<Transformer>): BattleResult {
  const autobots = transformers
    .filter(t => t.team === Team.AUTOBOT)
    .sort((t1, t2) => t1.rankComparator(t2));

  const deceptions = transformers
    .filter(t => t.team === Team.DECEPTICON)
    .sort((t1, t2) => t1.rankComparator(t2));

  if (!autobots.length && !deceptions.length) {
    return new BattleResult(0, null, null, null, null, null, 'No competitors');
  }

  if (!autobots.length) {
    return generateWalkoverResult(Team.DECEPTICON, deceptions);
  }

  if (!deceptions.length) {
    return generateWalkoverResult(Team.AUTOBOT, autobots);
  }

  let startingTeam: Array<Transformer>;
  let otherTeam: Array<Transformer>;

  if (autobots.length <= deceptions.length) {
    startingTeam = autobots;
    otherTeam = deceptions;
  } else {
    startingTeam = deceptions;
    otherTeam = autobots;
  }

  const turns = startingTeam.length;
  const winners: Array<Transformer> = [];
  const losers: Array<Transformer> = [];

  try {
  startingTeam.forEach((member, index) => {
    const opponent = otherTeam[index];
    const { winner, loser, tie } = faceOff(member, opponent);

    if (!tie) {
      winners.push(winner);
      losers.push(loser);
    }
  });
  } catch (err) {
    console.error(err);
    return new BattleResult(0, null, null, null, null, null, 'Evertyhing has been destroyed!');
  }

  const winnersFromAutobots = winners.filter(winner => winner.team === Team.AUTOBOT);
  const winnersFromDecepticons = winners.filter(winner => winner.team === Team.DECEPTICON);

  if (winnersFromAutobots.length > winnersFromDecepticons.length) {
    return new BattleResult(
      turns,
      Team.AUTOBOT,
      autobots,
      Team.DECEPTICON,
      deceptions,
      winnersFromDecepticons,
      null);
  } else if (winnersFromAutobots.length < winnersFromDecepticons.length) {
    return new BattleResult(
      turns,
      Team.DECEPTICON,
      deceptions,
      Team.AUTOBOT,
      autobots,
      winnersFromAutobots,
      null);
  } else {
    return new BattleResult(turns, null, null, null, null, null, 'A TIE!!');
  }
}
