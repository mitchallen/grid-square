
@mitchallen/grid-square
==
2D square grid
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/grid-square --save
  
* * *

## Usage

    "use strict";
    var gridFactory = require("@mitchallen/grid-square");
    
    var xSize = 5;
    var ySize = 10;
    var value = 100;
    var i = xSize - 1;
    var j = ySize - 1;
    
    var grid = gridFactory.create( { x: xSize, y: ySize } );
    
	if(!grid) {
    	console.error("couldn't create grid");
	}
    
    if(! grid.isCell( i, j ) ) {
    	console.error("parameters not within grid");
    }
    
    if(! grid.set( i, j, value )) {
    	console.error("couldn't set grid value");
    }
    
    let result = grid.get( i, j );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }
    
## Methods

### create( spec )

Factory method that returns a square grid object.

It takes one spec parameter that must be an object with __x__ and __y__ values specifying the size of the grid.

The __x__ and __y__ values can not be less than one (1).

The method will set xSize and ySize to 0 if no parameters are set

You can call __create__ multiple times to create multiple grids.

    var gridFactory = require("@mitchallen/grid-square");
    
    var grid1 = gridFactory.create( { x: 5, y: 10 } );
    var grid2 = gridFactory.create( { x: 7, y: 20 } );
    
	if(!grid1 || !grid2) ...
	
### squareGrid.xSize

Returns the size of the x dimension.

	grid.xSize.should.eql(5);
	
### squareGrid.ySize

Returns the size of the y dimension.

	grid.ySize.should.eql(10);


### grid.isCell( x, y )

The __x__ and __y__ parameters should be zero-based coordinates ranging from  zero (0) to axis size minus one. 
 

The method is called internally by __get__.

    if(! grid.isCell( i, j ) ) {
    	console.error("parameters not within grid");
    }

### grid.set( x, y, value )

The __x__ and __y__ values must be greater than zero. If the parameters fail validation then a value of __false__ is returned. Otherwise __true__ is returned.

The __value__ parameter can be a number, a string or even an object.

    if(! grid.set( i, j, value )) {
    	console.error("couldn't set grid value");
    }

### grid.get( x, y )

The __x__ and __y__ values are passed to the __isCell__ method internally for validation. If the parameters fail validation then a __*null*__ object is returned. Otherwise the value of the cell (grid location) is returned.

The returned value can be a number, a string or even an object.

    let result = grid.get( i, j );
    
    if(! result) {
    	console.error("couldn't get grid value");
    } else {
    	console.log("grid value: ", result );
    }

### grid.fill(value)

Fills the grid with whatever is passed in as __value__. Value can be a number, a string or even an object. Any existing values in the grid will be replaced with the new fill value.

    let fillValue = "foo";
    
    var result = grid.fill(fillValue);
    
### grid.cloneArray()

Returns a clone of the internal array. This is not a reference. So changes to the cloned array should not change the original.

	let tX = 0;
	let tY = 0;
	let gridValue = 100;
	let cloneValue = 500;
	
	// Set a value in the original grid
	grid.set(tX,tY,gridValue);

	// Clone the grid	
	let arr = grid.cloneArray();
	
	// Verify value exists in clone
	arr[tX][tY].should.eql(gridValue);
	
	// Change value in clone
	arr[tX][tY] = cloneValue;
	
	// Verify new value is set in clone
	arr[tX][tY].should.eql(cloneValue);
	
	// Ensure that value does not alter original grid
	grid.get(tX,tY).should.eql(gridValue);
	
	
### grid.rows

Number of rows in the grid.

	var r = grid.rows;

### grid.rowSize(rowIndex)

	var r = grid.rowSize(1);

Size of row.

### grid.log()

Logs the size and contents of the internal array.

    grid.log();
    
Example output:

    size: 4
    [ [ 20, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 10 ],
      [ 10, 10, 10, 10, 30 ] ]
      
* * *

### Browser Client Example

You can reference a minimized client version inside an HTML script tag using one of these URL's:

* https://cdn.rawgit.com/mitchallen/grid-square/v0.1.0/dist/grid-square.min.js
* https://unpkg.com/@mitchallen/grid-square@0.1.0/dist/grid-square.min.js

Adjust the URL's depending upon what version is available

The __rawgit.com__ URL will pull based on the version from GitHub.

The __unpkg.com__ URL will pull based on the version in npmjs.com.

See http://rawgit.com and https://unpkg.com for other ways to retrieve the file. 

The factory function can be retrieved from window.MitchAllen.GridSquare:

    var factory = window.MitchAllen.GridSquare;
    var xSize = 10, ySize = 5;
    var sg = factory.Square( { x: xSize, y: ySize } );

Example:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Grid Square Example</title>
        <meta name="description" content="Grid Example">
        <!-- either cdn should work 
        <script src="https://cdn.rawgit.com/mitchallen/grid-square/v0.1.0/dist/grid-square.min.js"></script>
    -->
        <script src="https://unpkg.com/@mitchallen/grid-square@0.1.0/dist/grid-square.min.js"></script>
        <script>
          var factory = window.MitchAllen.GridSquare;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sg = factory.create( { x: xSize, y: ySize } );
          sg.log(); 
        </script>
      </head>
      <body>
        <h1>Grid Square Example</h1>
      </body>
    </html>

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/grid-square.git](https://bitbucket.org/mitchallen/grid-square.git)
* [github.com/mitchallen/grid-square.git](https://github.com/mitchallen/grid-square.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
