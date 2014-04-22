var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "PERRO";
categorias[2] = "GATO";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var marcas = new Array;

marcas.push({
	'id' : 1,
	'nombre' : "DOGUTOS",
	'imagen' : "/img/Doguitos.jpg",
	'categoria' : "PERRO"
});

marcas.push({
	'id' : 2,
	'nombre' : "ROYAL KANIN",
	'imagen' : "/img/RoyalKanin.jpg",
	'categoria' : "PERRO"
});

marcas.push({
	'id' : 3,
	'nombre' : "GATIS",
	'imagen' : "/img/Gati.jpg",
	'categoria' : "GATO"
});

marcas.push({
	'id' : 4,
	'nombre' : "EUKANUBA",
	'imagen' : "/img/Doguitos.jpg",
	'categoria' : "PERRO"
});

var productos = new Array;

productos.push({
	"id" : 1,
	'nombre' : "DOGUITOS 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[1],
	'marca' : marcas[0]['id'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	"id" : 2,
	'nombre' : "GATIS 1",
	'descripcion' : "Alimento para adultos",
	'precio' : 1500,
	'categoria' : categorias[2],
	'marca' : marcas[2]['id'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	"id" : 3,
	'nombre' : "EUKANUBA 1",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[1],
	'marca' : marcas[3]['id'],
	'imagen' : "/img/Perro1.jpg"
});

productos.push({
	"id" : 4,
	'nombre' : "GATIS 2",
	'descripcion' : "Alimento para cachorros",
	'precio' : 2500,
	'categoria' : categorias[2],
	'marca' : marcas[2]['id'],
	'imagen' : "/img/Gato1.jpg"
});

productos.push({
	"id" : 5,
	'nombre' : "DOGUITOS 2",
	'descripcion' : "Alimento para adultos",
	'precio' : 1000,
	'categoria' : categorias[1],
	'marca' : marcas[0]['id'],
	'imagen' : "/img/Perro1.jpg"
});

Ti.App.categoria_actual = args['categoria'];
Ti.App.marca_actual = args['marca'];
ordenarProductos(Ti.App.categoria_actual,Ti.App.marca_actual);

function ordenarProductos(categoria,marca){
	
	Ti.App.categoria_actual = categoria;
	Ti.App.marca_actual = marca;
	
	Titanium.API.info(Ti.App.categoria_actual); 
	Titanium.API.info(Ti.App.marca_actual); 
	
	var marcasScroll = $.marcasScroll;
	marcasScroll.removeAllChildren();

	for(var i = 0; i < marcas.length; i++){
		
		var ImageViewMarca = Ti.UI.createImageView({
			backgroundImage : marcas[i]['imagen'],
			width:"153.6px",
			id: marcas[i]['id'],
			height:"100%"
		});
		
		ImageViewMarca.addEventListener("click",function(){
			productosMarca(this['id']);
		});
		
		if(Ti.App.categoria_actual == "TODAS"){
			marcasScroll.add(ImageViewMarca);	
		}
		else if(Ti.App.categoria_actual == marcas[i]["categoria"]){
			marcasScroll.add(ImageViewMarca);	
		}
	}
	
	$.perrogato.backgroundImage = "/img/perrogato.jpg";
	$.perro.backgroundImage = "/img/perro.jpg";
	$.gato.backgroundImage = "/img/gato.jpg";
		
	if(categoria == "TODAS"){
		$.perrogato.backgroundImage = "/img/perrogato2.jpg";
	}
	else if(categoria == "PERRO"){
		$.perro.backgroundImage = "/img/perro2.jpg";
	}
	else if(categoria == "GATO"){
		$.gato.backgroundImage = "/img/gato2.jpg";
	}
	
	var mainScroll = $.mainScroll;
	mainScroll.removeAllChildren();

	for(var i = 0; i < productos.length; i++){
		
		var Main = Ti.UI.createView({
			width:"100%",
			layout:'horizontal',
			height:"232px",
			id: productos[i]['id']
		});
		
		var Margen = Ti.UI.createView({
			width:"100%",
			height:"0.2%",
			backgroundColor:"#e8e8e8"
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
			height:"28.2%",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text : productos[i]['nombre']
		});
		
		var LabelDescripcion = Ti.UI.createLabel({
			color:"gray",
			width:"100%",
			height:"19.6%",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
			text : productos[i]['descripcion']
		});
		
		var LabelPrecio = Ti.UI.createLabel({
			width:"100%",
			height:"21.7%",
			color:"#5c5c5b",
			top:"0%",
			left:"8.3%",
			font:{
				fontFamily:"Noto Sans",
				fontWeight:"bold"
			},
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
		
		Main.addEventListener("click",function(){
			productosView(this['id']);
		});
		
		if((categoria == "TODAS") && (marca == "TODAS")){
			mainScroll.add(Main);	
			mainScroll.add(Margen);	
		}
		else if((categoria == "TODAS") && (marca != "TODAS")){
			if(marca == productos[i]['marca']){	
				mainScroll.add(Main);
				mainScroll.add(Margen);	
			}	
		}
		else if((categoria != "TODAS") && (marca == "TODAS")){
			if(categoria == productos[i]['categoria']){
				mainScroll.add(Main);	
				mainScroll.add(Margen);	
			}
		}
		else if((categoria != "TODAS") && (marca != "TODAS")){
			if((categoria == productos[i]['categoria']) && (marca == productos[i]['marca'])){
				mainScroll.add(Main);	
				mainScroll.add(Margen);	
			}	
		}
	}
}

function productosPerroGato(){
	ordenarProductos(categorias[3],"TODAS");
}

function productosPerro(){
	ordenarProductos(categorias[1],"TODAS");
}

function productosGato(){
	ordenarProductos(categorias[2],"TODAS");
}

function productosMarca(marca){
	Titanium.API.info(Ti.App.marca_actual); 
	if(marca == Ti.App.marca_actual){
		ordenarProductos(Ti.App.categoria_actual,"TODAS");	
	}
	else{
		ordenarProductos(Ti.App.categoria_actual,marca);	
	}
}

function productosView(producto){
	
	var vista = Alloy.createController('productoView',{producto: producto}).getView();
	vista.open();
}