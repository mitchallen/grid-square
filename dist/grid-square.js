"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/@mitchallen/grid-core/dist/grid-core.js
var require_grid_core = __commonJS({
  "node_modules/@mitchallen/grid-core/dist/grid-core.js"(exports2, module2) {
    (function(f) {
      if (typeof exports2 === "object" && typeof module2 !== "undefined") {
        module2.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        (g.MitchAllen || (g.MitchAllen = {})).GridCore = f();
      }
    })(function() {
      var define2, module3, exports3;
      return (/* @__PURE__ */ function() {
        function r(e, n, t) {
          function o(i2, f) {
            if (!n[i2]) {
              if (!e[i2]) {
                var c = "function" == typeof require && require;
                if (!f && c) return c(i2, true);
                if (u) return u(i2, true);
                var a = new Error("Cannot find module '" + i2 + "'");
                throw a.code = "MODULE_NOT_FOUND", a;
              }
              var p = n[i2] = { exports: {} };
              e[i2][0].call(p.exports, function(r2) {
                var n2 = e[i2][1][r2];
                return o(n2 || r2);
              }, p, p.exports, r, e, n, t);
            }
            return n[i2].exports;
          }
          for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
          return o;
        }
        return r;
      }())({ 1: [function(_dereq_, module4, exports4) {
        "use strict";
        module4.exports.create = function() {
          var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var _spec$rows = spec.rows, _rows = _spec$rows === void 0 ? 0 : _spec$rows;
          _rows = Math.max(_rows, 0);
          var _array = [];
          while (_array.push([]) < _rows) {
          }
          var obj = Object.create({}, {
            "rows": {
              writeable: false,
              value: _rows,
              enumerable: true
            }
          });
          return Object.assign(obj, {
            log: function log() {
              console.log("size: %d: ", _rows);
              console.log(_array);
            },
            rowSize: function rowSize(row) {
              if (row < 0 || row >= _rows) {
                return 0;
              }
              return _array[row].length;
            },
            isCell: function isCell(a, b) {
              var rs = this.rowSize(a);
              return a >= 0 && a < _rows && b >= 0 && b < rs;
            },
            set: function set(a, b, value) {
              if (a < 0 || b < 0) return false;
              _array[a][b] = value;
              return true;
            },
            get: function get(a, b) {
              if (!this.isCell(a, b)) {
                return null;
              }
              return _array[a][b];
            },
            fill: function fill(value) {
              for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                  _array[row][pos] = value;
                }
              }
            },
            cloneArray: function cloneArray() {
              var _clone = [];
              while (_clone.push([]) < _rows) {
              }
              for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                  _clone[row][pos] = _array[row][pos];
                }
              }
              return _clone;
            }
          });
        };
      }, {}] }, {}, [1])(1);
    });
  }
});

// src/index.js
var coreGrid = require_grid_core();
module.exports.create = (spec = {}) => {
  let {
    x: _x = 0,
    y: _y = 0
  } = spec;
  _x = Math.max(_x, 0);
  _y = Math.max(_y, 0);
  var obj = coreGrid.create({ rows: _x });
  for (var row = 0; row < _x; row++) {
    for (var col = 0; col < _y; col++) {
      obj.set(row, col, 0);
    }
  }
  Object.defineProperties(obj, {
    "xSize": {
      writeable: false,
      value: _x,
      enumerable: true
    },
    "ySize": {
      writeable: false,
      value: _y,
      enumerable: true
    }
  });
  return obj;
};
//# sourceMappingURL=grid-square.js.map
