let nofux = typeof global === 'object'
  ? global
  : typeof window === 'object'
    ? window
    : typeof self === 'object'
      ? self
      : {};

if ('Proxy' in nofux) {
  nofux = new Proxy(nofux, {
    set: function(target: any[PropertyKey], property, value, receiver) {
      setTimeout(
        () => target[property] = value,
        1000 * Math.random()
      );

      return true;
    }
  });
}

export default nofux;