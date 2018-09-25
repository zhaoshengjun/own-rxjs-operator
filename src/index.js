import { from } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);

observable$.subscribe(value => {
  console.log(value);
});
