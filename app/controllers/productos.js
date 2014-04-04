var args = arguments[0] || {};

var categorias = [];

categorias[1] = "PERRO";
categorias[2] = "GATO";

var marcas = [];

marcas[1] = "EUKANUBA";
marcas[2] = "EUGATUBA";
marcas[3] = "GATIS";

var productos = new Array;

productos.push({
	'nombre' : "EUKANUBA 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[1],
	'marca' : marcas[1],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'nombre' : "EUGATUBA 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[2],
	'marca' : marcas[2],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'nombre' : "EUKANUBA 2",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[1],
	'marca' : marcas[1],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'nombre' : "EUGATUBA 2",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[2],
	'marca' : marcas[2],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'nombre' : "KANUS 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1000,
	'categoria' : categorias[1],
	'marca' : marcas[3],
	'imagen' : "/img/Perro1.jpg"
});

var elemento = $.mainScroll;

for(var i = 0; i < productos.length; i++){
	
	var Main = Ti.UI.createView({
		width:"100%",
		layout:'horizontal',
		height:"232px"
	});
	
	var ImageViewProducto = Ti.UI.createImageView({
		backgroundImage : productos[i]['imagen'],
		width:"25%",
		height:"100%",
		left:"0"
	});
	
	var LabelGroup = Ti.UI.createView({
		width:"67%",
		height:"100%",
		left:"0",
		layout:"vertical"
	});
	
	var LabelNombre = Ti.UI.createLabel({
		color:"#cc5122",
		width:"100%",
		height:"100px",
		text : productos[i]['nombre']
	});
	
	var LabelDescripcion = Ti.UI.createLabel({
		color:"gray",
		width:"100%",
		height:"50px",
		text : productos[i]['descripcion']
	});
	
	var LabelPrecio = Ti.UI.createLabel({
		width:"100%",
		height:"82px",
		text : productos[i]['precio']
	});
	
	var ImageViewFlecha = Ti.UI.createImageView({
		width:"7%",
		height:"100%",
		feft:"0",
		backgroundImage : "/img/Flecha.jpg"
	});
	
	LabelGroup.add(LabelNombre);
	LabelGroup.add(LabelDescripcion);
	LabelGroup.add(LabelPrecio);
	
	Main.add(ImageViewProducto);
	Main.add(LabelGroup);
	Main.add(ImageViewFlecha);
	
	elemento.add(Main);
	
}

