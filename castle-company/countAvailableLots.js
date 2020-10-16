/**
 * Given a land checks how many castles can be built on it.
 *
 * A land is represented as an one dimensioned array of integers,
 * where each element is the current height of that land.
 *
 * A castle can be built only
 * - at the beginning
 * - at the end
 * - in a peek or
 * - in a valley
 *
 * @param {array} land - array of integers to represent the place where castles can be built
 * @returns {number} how many castles can be built
 */
function countAvailableLots(land) {
  if (!land || !land.length || !Array.isArray(land))
    return 0

  const isPeek = (previous, current, next) => current > previous && current > next
  const isValley = (previous, current, next) => current < previous && current < next

  let result  = 0
  let buffer = null

  land.forEach((current, index) => {
    const hasBuffer = buffer !== null
    const previous = hasBuffer ? buffer : land[index - 1]
    const next = land[index + 1]
    const first = index === 0
    const last = index === land.length - 1

    // When the beginning and end are the same, one element arrays,
    // you can build only one castle
    if (land.length === 1) {
      result++
    }
    // You can always build a castle at the beginning or the end for non empty arrays.
    else if ((first && !last) || (!first && last)) {
      result++
    }
    // When it's in the middle of it and the current and the next has the same value,
    // skips it to check after that
    else if (!first && !last && current === next) {
      buffer = previous
    }
    // If the variation is either a peek or valley, should be able to build a castle
    else if (isPeek(previous, current, next) || isValley(previous, current, next)) {
      buffer = null
      result++
    }
  })

  return result
}

module.exports = countAvailableLots
