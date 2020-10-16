const countAvailableLots = require('./countAvailableLots')

test('empty value, null, undefined or no array should return 0', () => {
  expect(countAvailableLots([])).toBe(0)
  expect(countAvailableLots(null)).toBe(0)
  expect(countAvailableLots()).toBe(0)
  expect(countAvailableLots(0)).toBe(0)
});

test('with only element should return 1', () => {
  expect(countAvailableLots([2])).toBe(1)
})

test('flat should return 2', () => {
  expect(countAvailableLots([2, 2, 2, 2, 2])).toBe(2)
})

test('ascending should return 2', () => {
  expect(countAvailableLots([1, 2, 3, 4, 4])).toBe(2)
})

test('descending should return 2', () => {
  expect(countAvailableLots([4, 3, 2, 1])).toBe(2)
})

test('with one peek should return 3', () => {
  expect(countAvailableLots([5, 5, 9, 7, 5])).toBe(3)
})

test('with one long peek should return 3', () => {
  expect(countAvailableLots([5, 5, 9, 9, 9, 5])).toBe(3)
})

test('with one long valley should return 3', () => {
  expect(countAvailableLots([5, 5, 1, 1, 1, 5])).toBe(3)
})

test('zigzag should return the quantity of elements', () => {
  expect(countAvailableLots([1, 3, 1, 3, 1, 3])).toBe(6)
})

test('multi level peek', () => {
  expect(countAvailableLots([2, 3, 4, 3, 2])).toBe(3)
})

test('multi level valley', () => {
  expect(countAvailableLots([2, 1, 0, 1, 2])).toBe(3)
})

test('all before but with negative heights', () => {
  expect(countAvailableLots([-2])).toBe(1)
  expect(countAvailableLots([-2, -2, -2, -2, -2])).toBe(2)
  expect(countAvailableLots([-1, -2, -3, -4, -4])).toBe(2)
  expect(countAvailableLots([-4, -3, -2, -1])).toBe(2)
  expect(countAvailableLots([-5, -5, -9, -7, -5])).toBe(3)
  expect(countAvailableLots([-5, -5, -9, -9, -9, -5])).toBe(3)
  expect(countAvailableLots([-5, -5, -1, -1, -1, -5])).toBe(3)
  expect(countAvailableLots([-1, -3, -1, -3, -1, -3])).toBe(6)
  expect(countAvailableLots([-2, -3, -4, -3, -2])).toBe(3)
  expect(countAvailableLots([-2, -1, -0, -1, -2])).toBe(3)
})
