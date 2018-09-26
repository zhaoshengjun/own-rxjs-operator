import { from, Subscriber, Observable } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);
const subscriber = {
  next: value => console.log(value),
  complete: _ => console.log("Done!"),
  error: err => console.trace(err)
};

class DoubleSubscriber extends Subscriber {
  _next(value) {
    this.destination.next(value * 2);
  }
}
const double = source => {
  const o$ = new Observable();
  o$.source = source;
  o$.operator = {
    call(sub, source) {
      observable$.subscribe(new DoubleSubscriber(sub));
    }
  };
  return o$;
};

observable$.pipe(double).subscribe(subscriber);
