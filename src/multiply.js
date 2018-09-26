import { Subscriber } from "rxjs";

class MultiplySubscriber extends Subscriber {
  constructor(number, subscriber) {
    super(subscriber);
    this.number = number;
  }
  _next(value) {
    this.destination.next(value * this.number);
  }
}

export const multiply = number => source =>
  source.lift({
    call(sub, source) {
      source.subscribe(new MultiplySubscriber(number, sub));
    }
  });
