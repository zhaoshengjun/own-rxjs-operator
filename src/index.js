import { from, Subscriber } from "rxjs";

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
observable$.subscribe(new DoubleSubscriber(subscriber));
