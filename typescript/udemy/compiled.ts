import walkBaseline, { walkTypes, walkSymbols, BaselineTarget } from 'ts-baseline';


var baseline = walkTypes(`const a: number = 1;`)
console.log(baseline)

var baseline = walkSymbols(`const a: number = 1;`)
console.log(baseline)

var baseline = walkBaseline(`const a: number = 1;`,BaselineTarget.types)
console.log(baseline)

/*
Steps:
- npm install ts-baseline

References:
- https://github.com/HearTao/ts-baseline
*/
