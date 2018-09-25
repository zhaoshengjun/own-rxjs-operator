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
observable$
  .pipe(source => {
    const o$ = new Observable();
    o$.source = observable$;
    o$.operator = {
      call(sub, source) {
        observable$.subscribe(new DoubleSubscriber(sub));
      }
    };
    return o$;
  })
  .subscribe(subscriber);
