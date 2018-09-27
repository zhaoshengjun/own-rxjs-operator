import { fromEvent, of, pipe } from "rxjs";
import { scan, delay } from "rxjs/operators";

const observable$ = fromEvent(document, "click").pipe(scan(i => i + 1, 0));

const subscriber = {
  next: value => {
    console.log(value);
    of(value)
      .pipe(delay(500))
      .subscribe({
        next: value => console.log(`inner ${value}`)
      });
  },
  complete: () => console.log("done"),
  error: value => console.log(value)
};

observable$.subscribe(subscriber);
