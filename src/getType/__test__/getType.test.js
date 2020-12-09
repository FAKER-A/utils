import getType from '../index';

describe('getType', () => {
  test('undefined', () => {
    let a;
    expect(getType(a)).toBe('Undefined');
  });
  test('null', () => {
    const a = null;
    expect(getType(a)).toBe('Null');
  });
  test('number', () => {
    const a = 1;
    expect(getType(a)).toBe('Number');
  });
  test('string', () => {
    const a = '1';
    expect(getType(a)).toBe('String');
  });
  test('boolean', () => {
    const a = true;
    expect(getType(a)).toBe('Boolean');
  });
  test('array', () => {
    const a = [];
    expect(getType(a)).toBe('Array');
  });
  test('object', () => {
    const a = {};
    expect(getType(a)).toBe('Object');
  });
  test('function', () => {
    const a = () => {};
    expect(getType(a)).toBe('Function');
  });
});
