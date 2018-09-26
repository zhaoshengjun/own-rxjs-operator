import { from, Subscriber, Observable } from "rxjs";

const observable$ = from([1, 2, 3, 4, 5]);
const subscriber = {
  next: value => console.log(value),
  complete: _ => console.log("Done!"),
  error: err => console.trace(err)
};

class MultiplySubscriber extends Subscriber {
  constructor(number, subscriber) {
    super(subscriber);
    this.number = number;
  }
  _next(value) {
    this.destination.next(value * this.number);
  }
}
const multiply = number => source =>
  source.lift({
    call(sub, source) {
      observable$.subscribe(new MultiplySubscriber(number, sub));
    }
  });

observable$.pipe(multiply(3)).subscribe(subscriber);
