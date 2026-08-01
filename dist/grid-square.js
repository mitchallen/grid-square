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
    module2.exports.create = (u = {}) => {
      let { rows: t = 0 } = u;
      t = Math.max(t, 0);
      for (var i = []; i.push([]) < t; ) ;
      var a = Object.create({}, { rows: { writeable: false, value: t, enumerable: true } });
      return Object.assign(a, { log: function() {
        console.log("size: %d: ", t), console.log(i);
      }, rowSize: function(e) {
        return e < 0 || e >= t ? 0 : i[e].length;
      }, isCell: function(e, r) {
        var l = this.rowSize(e);
        return e >= 0 && e < t && r >= 0 && r < l;
      }, set: function(e, r, l) {
        return e < 0 || r < 0 ? false : (i[e][r] = l, true);
      }, get: function(e, r) {
        return this.isCell(e, r) ? i[e][r] : null;
      }, fill: function(e) {
        for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) i[r][n] = e;
      }, cloneArray: function() {
        for (var e = []; e.push([]) < t; ) ;
        for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) e[r][n] = i[r][n];
        return e;
      } });
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
