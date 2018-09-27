import { fromEvent, of, pipe } from "rxjs";
import { scan, delay, mergeMap } from "rxjs/operators";

const observable$ = fromEvent(document, "click").pipe(
  scan(i => i + 1, 0),
  mergeMap(value => of(value).pipe(delay(500)))
);

const subscriber = {
  next: value => {
    console.log(value);
  },
  complete: () => console.log("done"),
  error: value => console.log(value)
};

observable$.subscribe(subscriber);
