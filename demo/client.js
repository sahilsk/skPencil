var 
	Pencil = require("../skPencil")
	;
document.onreadystatechange = function () {	
	if (document.readyState == "complete") {
        initSKPencil();
    }
}


function initSKPencil() {
	window.Pencil = Pencil;
	var pencil = new Pencil();
	window.pencil = pencil;
	pencil.setWhiteboard( "canvas" );
	pencil.draw();
	pencil.brushStyle = {
        'fill': 'none',
        'stroke': 'red',
        'stroke-width': '4px'
    };
	pencil.brushStyle.stroke = "blue";	
	
	pencil.on("path", function(path){
		console.log("new path added. : ", path );
	});
	pencil.on("started", function(pos){
		console.log("client started at ", pos );
	});
	pencil.on("stopped", function(pos){
		console.log("client stopped at ", pos );
	});	

}
