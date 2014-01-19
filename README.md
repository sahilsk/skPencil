skPencil
========

SVG Pencil experiment (mimicking mad scientist )


##Documentation

In HTML file
``` js
 <div id="whiteboard"> </div>
```

Now in your client side javascript instantiate pencil object

``` js
	// .../client.js
	var Pencil = require("./skPencil");
	var pencil = new Pencil();
	pencil.setWhiteboard( *"whiteboard"* );
	pencil.draw();
	pencil.brushStyle = {
        'fill': 'none',
        'stroke': 'red',
        'stroke-width': '4px'
    };
	pencil.brushStyle.stroke = "blue";	
``` 

### Don't forget to browserify your client code to run it at browser side.

``` js
	browserify client.js -o bundle.js
```

Include this bundle.js in html and have happy drawing.

## Styling

Play with pencil.brushStyle object to add or remove default style.
	
eg. To add red color , 10px wide brush 
	
		``` js
			pencil.brushStyle.stroke = "red";
			pencil.brushStyle.stroke-width = "10px";
		```
		
## Events 

Different are fired by your pencil. These are
* started : When drawing begin triggered by mousedown event 
* stopped : when drawing stopped triggered by mouseup event
* path: when a stroke applied on canvas (mousedown->mouseup). It give svg path node which
			one can use to simulate online whiteboard for collaborative drawing.
		
``` js
	pencil.on("path", function(path){
	console.log("new path added. : ", path );
	});
	pencil.on("started", function(pos){
		console.log("client started at ", pos );
	});
	pencil.on("stopped", function(pos){
		console.log("client stopped at ", pos );
	});	
```
	
	