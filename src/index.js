import { from } from "rxjs";
import { multiply } from "./multiply";

const observable$ = from([1, 2, 3, 4, 5]);
const subscriber = {
  next: value => console.log(value),
  complete: _ => console.log("Done!"),
  error: err => console.trace(err)
};

observable$.pipe(multiply(3)).subscribe(subscriber);
observable$.pipe(multiply(5)).subscribe(subscriber);
