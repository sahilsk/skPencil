skPencil
========

SVG Pencil experiment (mimicking mad scientist )


##Documentation

'''
	var Pencil = require("./skPencil");
	var pencil = new Pencil();
	pencil.setWhiteboard( "element_ID" );
	pencil.draw();
	pencil.brushStyle = {
        'fill': 'none',
        'stroke': 'red',
        'stroke-width': '4px'
    };
	pencil.brushStyle.stroke = "blue";	
'''	

### Don't forget to browserify your client code to run it at browser side.

