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
	pencil.setWhiteboard( <em>"whiteboard" </em> );
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
	
	To add red color , 10px wide brush 
		```js
		pencil.brushStyle.stroke = "red";
		pencil.brushStyle.stroke-width = "10px";
		```
	
	
	
	