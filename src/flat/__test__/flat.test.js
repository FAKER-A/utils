/* eslint-disable no-extend-native */
import flat from '../index';

describe('flat', () => {
  test('不传入数组', () => {
    const a = {};
    expect(flat(a)).toEqual([]);
  });
  test('传入一层数组', () => {
    const a = [1, 2, 3];
    expect(flat(a)).toEqual([1, 2, 3]);
  });
  test('传入二层数组', () => {
    const a = [1, 2, 3, [4, 5, 6]];
    expect(flat(a)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('传入三层数组,层级参数不传', () => {
    const a = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    expect(flat(a)).toEqual([1, 2, 3, 4, 5, 6, [7, 8, 9]]);
  });
  test('传入三层数组,层级参数传2', () => {
    const a = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    expect(flat(a, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('非Arrary.prototype.flat, 不传入数组', () => {
    Array.prototype.flat = null;
    const a = {};
    expect(flat(a)).toEqual([]);
  });
  test('非Arrary.prototype.flat,传入一层数组', () => {
    Array.prototype.flat = null;
    const a = [1, 2, 3];
    expect(flat(a)).toEqual([1, 2, 3]);
  });
  test('非Arrary.prototype.flat,传入二层数组', () => {
    Array.prototype.flat = null;
    const a = [1, 2, 3, [4, 5, 6]];
    expect(flat(a)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('非Arrary.prototype.flat,传入三层数组,层级参数不传', () => {
    Array.prototype.flat = null;
    const a = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    expect(flat(a)).toEqual([1, 2, 3, 4, 5, 6, [7, 8, 9]]);
  });
  test('非Arrary.prototype.flat,传入三层数组,层级参数传2', () => {
    const a = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
    Array.prototype.flat = null;
    expect(flat(a, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
