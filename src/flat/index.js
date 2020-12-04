function flat(array, depth = 1) {
  if (!Array.isArray(array)) return [];
  if (Array.prototype.flat) {
    const { flat: fn } = Array.prototype;
    return fn.call(array, depth);
  }
  if (depth > 0) {
    return array.reduce((prev, next) => {
      const newPrev = prev.concat(Array.isArray(next) ? flat(next, depth - 1) : next);
      return newPrev;
    }, []);
  }
  return array;
}

export default flat;
