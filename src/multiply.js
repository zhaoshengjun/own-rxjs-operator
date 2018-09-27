import { map, filter } from "rxjs/operators";

const pipe = (...fns) => source => fns.reduce((acc, fn) => fn(acc), source);

export const multiply = number =>
  pipe(
    map(value => value * number),
    filter(value => value < 10)
  );
