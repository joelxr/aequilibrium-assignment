# `castle-company`

This project has a function called `countAvailbleLots` in a file with the same name.

As required this function will count how many castles can be built in a given land which is represented as an one-dimensioned array of integers, each integer is equivalent to the current height of that land. A castle can be built considering the following:

- always at the start and the end or
- in a valley or
- in a peek.

For example,

```
[ 1, 1, 1 ] // 2, one at the start and the end
[ 1 ] // 1, start and end are the same
[ 1, 1, 3, 1, 1 ] // 3, at the start, the peek (element with height 3) and the end
[ 5, 5, 1, 5, 5 ] // 3, at the start, the valley (element with height 1) and the end
```

To fulfill these requirements (and others) some tests can be found next to the function's file.

And to run the tests:

```
npm install
npm run test
```
