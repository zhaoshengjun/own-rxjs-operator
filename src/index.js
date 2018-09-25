import { from } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);
const subscriber = {
  next: value => console.log(value),
  complete: _ => console.log("Done!"),
  error: err => console.trace(err)
};
observable$.subscribe(subscriber);
