(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Utils = {}));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
