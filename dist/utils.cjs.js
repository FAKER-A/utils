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

function getType(param) {
  var toString = Object.prototype.toString;
  return toString.call(param).slice(8, -1);
}

exports.debounce = debounce;
exports.getType = getType;
