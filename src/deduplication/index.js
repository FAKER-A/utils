import getType from '../getType';

function deduplication(array, key) {
  const map = {};
  if (!key) return array;
  if (getType(array) !== 'Array') return array;
  return array.reduce((prev, next) => {
    if (!map[next[key]]) {
      prev.push(next);
      map[next[key]] = true;
    }
    return prev;
  }, []);
}

export default deduplication;
