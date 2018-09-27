import { map, filter } from "rxjs/operators";
import { pipe } from "rxjs";

export const multiply = number =>
  pipe(
    map(value => value * number),
    filter(value => value < 10)
  );
