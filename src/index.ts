export default typeof global === 'object'
  ? global
  : typeof window === 'object'
    ? window
    : typeof self === 'object'
      ? self
      : {};