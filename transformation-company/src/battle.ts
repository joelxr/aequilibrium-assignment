import { Team } from './shared/types/enums/team';
import { Transformer } from './shared/types/transformer';
import { TransformerDifference } from './shared/types/transformerDifference';
import { BattleResult } from './shared/types/battleResult';
import { FaceOffResult } from './shared/types/faceOffResult';

import getWinnerByBeingMoreSkilled from './shared/util/getWinnerByBeingMoreSkilled';
import getWinnerBySuperiority from './shared/util/getWinnerBySuperiority';
import getWinnerByScaredOffTheOpponent from './shared/util/getWinnerByScaredOffTheOpponent';
import getWinnerByOverallRating from './shared/util/getWinnerByOverallRating';

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

  result = getWinnerByScaredOffTheOpponent(t1, t2);

  if (result) {
    return result;
  }

  result = getWinnerByBeingMoreSkilled(t1, t2);

  if (result) {
    return result;
  }

  result = getWinnerByOverallRating(t1, t2);
  return result;
}

export function fight(transformers: Array<Transformer>): BattleResult {
  const autobots = transformers .filter(t => t.team === Team.AUTOBOT) .sort((t1, t2) => t1.rankComparator(t2));
  const deceptions = transformers .filter(t => t.team === Team.DECEPTICON) .sort((t1, t2) => t1.rankComparator(t2));

  if (!autobots.length && !deceptions.length) {
    return new BattleResult(0, null, null, null, null, null, 'No competitors');
  }

  if (!autobots.length) {
    return new BattleResult(0, Team.DECEPTICON, deceptions, Team.AUTOBOT, null, null, `W.O. victory! Autobots didn't showed up!`);
  }

  if (!deceptions.length) {
    return new BattleResult(0, Team.AUTOBOT, autobots, Team.DECEPTICON, null, null, `W.O. victory! Decepticons didn't showed up!`);
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
    return new BattleResult(0, null, null, null, null, null, 'Evertyhing has been destroyed!');
  }

  const winnersFromAutobots = winners.filter(winner => winner.team === Team.AUTOBOT);
  const winnersFromDecepticons = winners.filter(winner => winner.team === Team.DECEPTICON);
  const losersFromAutobots = losers.filter(loser => loser.team === Team.AUTOBOT);
  const losersFromDecepticons = losers.filter(loser => loser.team === Team.DECEPTICON);

  if (winnersFromAutobots.length > winnersFromDecepticons.length) {
    const survivors = deceptions.filter(d => losersFromDecepticons.includes(d));
    return new BattleResult(turns, Team.AUTOBOT, autobots, Team.DECEPTICON, deceptions, survivors, null);
  } else if (winnersFromAutobots.length < winnersFromDecepticons.length) {
    const survivors = autobots.filter(d => losersFromAutobots.includes(d));
    return new BattleResult(turns, Team.DECEPTICON, deceptions, Team.AUTOBOT, autobots, survivors, null);
  } else {
    return new BattleResult(turns, null, null, null, null, null, 'A TIE!!');
  }
}
