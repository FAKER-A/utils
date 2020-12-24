import getType from '../getType';

const TAG_RETURN = ['Number', 'String', 'Boolean', 'Date', 'Error'];
const TAG_OBJECT = ['Object', 'Array'];

function deepClone(obj, map = new Map()) {
  if (!obj) return obj;
  const type = getType(obj);
  if (TAG_RETURN.includes(type)) {
    return new obj.constructor(obj);
  }
  let cloneContext;
  // 防止循环引用
  if (map.has(obj)) {
    return map.get(obj);
  }
  map.set(obj, cloneContext);
  if (TAG_OBJECT.includes(type)) {
    cloneContext = type === 'Array' ? [] : {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloneContext[key] = deepClone(obj[key], map);
      }
    }
    return cloneContext;
  }
  return cloneContext;
}

export default deepClone;
