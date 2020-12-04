function flat(array, depth = 1) {
  if(!Array.isArray(array)) return [];
  if(Array.prototype.flat) {
    let flat = Array.prototype.flat;
    return flat.call(array, depth)
  }
  if(depth > 0) {
    return array.reduce((prev, next) => {
      return prev.concat(Array.isArray(next) ? flat(next, depth - 1) : next)
    }, [])
  }
  return array
}

export default flat;