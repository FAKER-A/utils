import getType from '../getType';

function chunk(array, size = 1) {
  if (!array) {
    return [];
  }
  if (getType(array) !== 'Array') {
    return array;
  }
  if (size <= 0) {
    return array.slice(0);
  }
  if (size >= array.length) {
    return array.slice(0);
  }
  const chunkLength = Math.ceil(array.length / size);
  const chunkedArray = [];
  for (let i = 0; i < chunkLength; i += 1) {
    const arr = array.slice((i * size), size + (i * size));
    chunkedArray.push(arr);
  }
  return chunkedArray;
}

export default chunk;
