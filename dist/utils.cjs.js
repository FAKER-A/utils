'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function debounce(fn, delay) {
  var _this = this;

  var timer = null;
  return function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, arg);
    }, delay);
  };
}

exports.debounce = debounce;
