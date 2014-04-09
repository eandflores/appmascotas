var args = arguments[0] || {};

Titanium.API.info(args['categoria']); 
Titanium.API.info(args['marca']); 

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "PERRO";
categorias[2] = "GATO";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var marcas = new Array;

marcas.push({
	'nombre' : "DOGUTOS",
	'imagen' : "/img/Doguitos.jpg"
});

marcas.push({
	'nombre' : "ROYAL KANIN",
	'imagen' : "/img/RoyalKanin.jpg"
});

marcas.push({
	'nombre' : "GATIS",
	'imagen' : "/img/Gati.jpg"
});

marcas.push({
	'nombre' : "EUKANUBA",
	'imagen' : "/img/Doguitos.jpg"
});

var marcasScroll = $.marcasScroll;

for(var i = 0; i < marcas.length; i++){
	
	var ImageViewMarca = Ti.UI.createImageView({
		backgroundImage : marcas[i]['imagen'],
		width:"153.6px",
		id: marcas[i]['nombre'],
		height:"100%"
	});
	
	ImageViewMarca.addEventListener("click",function(){
		productosMarca(this['id']);
	});
	
	marcasScroll.add(ImageViewMarca);	
}

var productos = new Array;

productos.push({
	'nombre' : "DOGUITOS 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[1],
	'marca' : marcas[0]['nombre'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'nombre' : "GATIS 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[2],
	'marca' : marcas[2]['nombre'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'nombre' : "EUKANUBA 1",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[1],
	'marca' : marcas[3]['nombre'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	'nombre' : "GATIS 2",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[2],
	'marca' : marcas[2]['nombre'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	'nombre' : "DOGUITOS 2",
	'descripcion' : "Alimento para adultos",
	'precio' : 1000,
	'categoria' : categorias[1],
	'marca' : marcas[0]['nombre'],
	'imagen' : "/img/Perro1.jpg"
});

var mainScroll = $.mainScroll;

for(var i = 0; i < productos.length; i++){
	
	if(args['categoria'] == "TODAS"){
		
		if(args['marca'] == "TODAS"){
			var Main = Ti.UI.createView({
				width:"100%",
				layout:'horizontal',
				height:"232px"
			});
			
			var ImageViewProducto = Ti.UI.createImageView({
				backgroundImage : productos[i]['imagen'],
				width:"25%",
				height:"100%"
			});
			
			var LabelGroup = Ti.UI.createView({
				width:"67%",
				height:"100%",
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
				backgroundImage : "/img/Flecha.jpg"
			});
			
			LabelGroup.add(LabelNombre);
			LabelGroup.add(LabelDescripcion);
			LabelGroup.add(LabelPrecio);
			
			Main.add(ImageViewProducto);
			Main.add(LabelGroup);
			Main.add(ImageViewFlecha);
			
			mainScroll.add(Main);	
		}
		
		else if(args['marca'] == productos[i]['marca']){
			var Main = Ti.UI.createView({
				width:"100%",
				layout:'horizontal',
				height:"232px"
			});
			
			var ImageViewProducto = Ti.UI.createImageView({
				backgroundImage : productos[i]['imagen'],
				width:"25%",
				height:"100%"
			});
			
			var LabelGroup = Ti.UI.createView({
				width:"67%",
				height:"100%",
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
				backgroundImage : "/img/Flecha.jpg"
			});
			
			LabelGroup.add(LabelNombre);
			LabelGroup.add(LabelDescripcion);
			LabelGroup.add(LabelPrecio);
			
			Main.add(ImageViewProducto);
			Main.add(LabelGroup);
			Main.add(ImageViewFlecha);
			
			mainScroll.add(Main);	
		}	
	}
	
	else if(args['categoria'] == productos[i]['categoria']){
		 	
	 	var Main = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"232px"
		});
		
		var ImageViewProducto = Ti.UI.createImageView({
			backgroundImage : productos[i]['imagen'],
			width:"25%",
			height:"100%"
		});
		
		var LabelGroup = Ti.UI.createView({
			width:"67%",
			height:"100%",
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
			backgroundImage : "/img/Flecha.jpg"
		});
		
		LabelGroup.add(LabelNombre);
		LabelGroup.add(LabelDescripcion);
		LabelGroup.add(LabelPrecio);
		
		Main.add(ImageViewProducto);
		Main.add(LabelGroup);
		Main.add(ImageViewFlecha);
		
		mainScroll.add(Main);	
	}
}

function productosPerroGato(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[3], marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[1], marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	
	var vista = Alloy.createController('productos',{categoria: categorias[2], marca: "TODAS"}).getView();
	vista.open();
}

function productosMarca(marca){
	
	var vista = Alloy.createController('productos',{categoria: categorias[3], marca: marca}).getView();
	vista.open();
}