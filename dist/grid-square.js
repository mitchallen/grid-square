"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/@mitchallen/grid-core/dist/grid-core.cjs.js
var require_grid_core_cjs = __commonJS({
  "node_modules/@mitchallen/grid-core/dist/grid-core.cjs.js"(exports2, module2) {
    "use strict";
    module2.exports.create = (spec = {}) => {
      let { rows: _rows = 0 } = spec;
      _rows = Math.max(_rows, 0);
      var _array = [];
      while (_array.push([]) < _rows) ;
      var obj = Object.create({}, {
        "rows": {
          writeable: false,
          value: _rows,
          enumerable: true
        }
      });
      return Object.assign(obj, {
        log: function() {
          console.log("size: %d: ", _rows);
          console.log(_array);
        },
        rowSize: function(row) {
          if (row < 0 || row >= _rows) {
            return 0;
          }
          return _array[row].length;
        },
        isCell: function(a, b) {
          var rs = this.rowSize(a);
          return a >= 0 && a < _rows && b >= 0 && b < rs;
        },
        set: function(a, b, value) {
          if (a < 0 || b < 0) return false;
          _array[a][b] = value;
          return true;
        },
        get: function(a, b) {
          if (!this.isCell(a, b)) {
            return null;
          }
          return _array[a][b];
        },
        fill: function(value) {
          for (var row = 0; row < _rows; row++) {
            var rs = this.rowSize(row);
            for (var pos = 0; pos < rs; pos++) {
              _array[row][pos] = value;
            }
          }
        },
        cloneArray: function() {
          var _clone = [];
          while (_clone.push([]) < _rows) ;
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
  }
});

// src/index.js
var coreGrid = require_grid_core_cjs();
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
