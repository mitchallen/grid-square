/**
    Module: @mitchallen/grid-square/modules/index.js
    Author: Mitch Allen
*/

/*jshint node: true */ 
/*jshint esversion: 6 */

"use strict";

var coreGrid = require('@mitchallen/grid-core');

module.exports.create = (spec) => {

    spec = spec || {};

    let _x = spec.x || 0;
    let _y = spec.y || 0;

    _x = Math.max( _x, 0 );
    _y = Math.max( _y, 0 );

    var obj = coreGrid.create( { rows: _x } );

    for(var row = 0; row < _x; row++) {
        for(var col = 0; col < _y; col++) {
            obj.set(row,col,0);
        }
    } 

    Object.defineProperties( obj, {
        "xSize": {
            writeable: false,
            value: _x,
            enumerable: true
        },
        "ySize": {
            writeable: false,
            value: _y,
            enumerable: true
        },
    });

    return obj;
};