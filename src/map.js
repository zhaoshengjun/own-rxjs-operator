export const map = fn => source =>
  source.lift({
    call(sub, source) {
      source.subscribe(sub);
    }
  });
