skPencil
========

SVG Pencil experiment (mimicking mad scientist )


##Documentation

In HTML file
...
 <div id="whiteboard"> </div>

Now in your client side javascript :

``` js
	// .../client.js
	var Pencil = require("./skPencil");
	var pencil = new Pencil();
	pencil.setWhiteboard( <strong>"whiteboard" </strong> );
	pencil.draw();
	pencil.brushStyle = {
        'fill': 'none',
        'stroke': 'red',
        'stroke-width': '4px'
    };
	pencil.brushStyle.stroke = "blue";	
``` js

### Don't forget to browserify your client code to run it at browser side.
''' js
browserify client.js -o bundle.js
'''
Include this bundle.js in html and have happy drawing.