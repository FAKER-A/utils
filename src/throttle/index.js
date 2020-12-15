function throttle(fn, delay) {
  let old = Date.now();
  return (...args) => {
    const now = Date.now();
    if (now - old < delay) {
      return null;
    }
    const res = fn.apply(this, args);
    old = Date.now();
    return res;
  };
}

export default throttle;
