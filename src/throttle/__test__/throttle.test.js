import throttle from '../index';

jest.useFakeTimers('modern');
describe('throttle', () => {
  test('初始化后函数未调用', () => {
    const callback = jest.fn();
    // eslint-disable-next-line no-unused-vars
    const throttleCallback = throttle(callback, 1000);
    expect(callback).not.toBeCalled();
  });
  test('初始化后1s内连续调用3次', () => {
    const callback = jest.fn();
    const throttleCallback = throttle(callback, 1000);
    setTimeout(() => { throttleCallback(); }, 1500);
    throttleCallback();
    throttleCallback();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('初始化后每过1.5s调用一次', () => {
    const callback = jest.fn();
    const throttleCallback = throttle(callback, 1000);
    setTimeout(() => { throttleCallback(); }, 0);
    setTimeout(() => { throttleCallback(); throttleCallback(); }, 1500);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
