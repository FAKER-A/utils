import chunk from '../index';

describe('chunk', () => {
  test('不传入参数', () => {
    expect(chunk()).toEqual([]);
  });
  test('传入空数组', () => {
    expect(chunk([])).toEqual([]);
  });
  test('传入非数组', () => {
    expect(chunk(1)).toBe(1);
  });
  test('传入正常数组', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  });
  test('传入size大于数组的的长度', () => {
    expect(chunk([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });
  test('传入size为0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test('传入size不能被数组的长度整除', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
