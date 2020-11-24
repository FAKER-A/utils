import debounce from "../index";
jest.useFakeTimers();
describe("debounce", () => {
  test("初始化后函数未调用", () => {
    const callback = jest.fn();
    const debounceCallback = debounce(callback, 1000)
    // 函数还未调用
    expect(callback).not.toBeCalled();
  })
  test("执行两次函数，在1s后被调用一次", () => {
    const callback = jest.fn();
    const debounceCallback = debounce(callback, 1000)
    // 函数还未调用
    expect(callback).not.toBeCalled();
    // 立即执行2次
    debounceCallback()
    debounceCallback()
    expect(callback).not.toBeCalled();
    // 快进，使得所有定时器的回调都被执行
    jest.runAllTimers();
    // 函数被调用
    expect(callback).toBeCalled();
    // 函数被调用一次
    expect(callback).toHaveBeenCalledTimes(1);
  })
  test("立即执行一次，1s后再次执行2次, 函数被执行2次", () => {
    const callback = jest.fn();
    const debounceCallback = debounce(callback, 1000);
    // 立即执行1次
    debounceCallback();
    // 1s后再次执行2次
    setTimeout(() => {
      debounceCallback();
      debounceCallback();
    }, 1000);
    // 快进
    jest.runAllTimers()
    expect(callback).toHaveBeenCalledTimes(2);
  })
})