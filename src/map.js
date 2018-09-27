import { Subscriber } from "rxjs";

class MapSubscriber extends Subscriber {
  _next(value) {
    this.destination.next(value * 2);
  }
}

export const map = fn => source =>
  source.lift({
    call(sub, source) {
      source.subscribe(new MapSubscriber(sub));
    }
  });
