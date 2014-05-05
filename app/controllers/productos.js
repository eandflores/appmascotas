var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

token = args['token'];
carro = args['carro'];

marcas = args['marcas'];
productos = args['productos'];
medios = args['medios'];
direcciones = args['direcciones'];

medio = args['medio'];
direccion = args['direccion'];
correo = args['correo'];
telefono = args['telefono'];

Ti.App.categoria_actual = args['categoria'];
Ti.App.marca_actual = args['marca'];

ordenarProductos(Ti.App.categoria_actual,Ti.App.marca_actual);

function ordenarProductos(categoria,marca){
	
	Ti.App.categoria_actual = categoria;
	Ti.App.marca_actual = marca;
	
	var marcasScroll = $.marcasScroll;

	for(var i = 0; i < marcas.length; i++){
		var ImageViewMarca = Ti.UI.createImageView({
			backgroundImage : marcas[i]['banner'],
			width:"153.6px",
			id: marcas[i]['id'],
			height:"100%"
		});
		
		ImageViewMarca.addEventListener("click",function(){
			productosMarca(this['id']);
		});
		
		/*
		if(Ti.App.categoria_actual == "TODAS"){
			marcasScroll.add(ImageViewMarca);	
		}
		else if(Ti.App.categoria_actual == Ti.App.marcas[i]["categoria"]){
			marcasScroll.add(ImageViewMarca);	
		}
		*/
		marcasScroll.add(ImageViewMarca);
	}
	
	$.perrogato.backgroundImage = "/img/perrogato.jpg";
	$.perro.backgroundImage = "/img/perro.jpg";
	$.gato.backgroundImage = "/img/gato.jpg";
		
	if(categoria == "TODAS"){
		$.perrogato.backgroundImage = "/img/perrogato2.jpg";
	}
	else if(categoria == "Perro"){
		$.perro.backgroundImage = "/img/perro2.jpg";
	}
	else if(categoria == "Gato"){
		$.gato.backgroundImage = "/img/gato2.jpg";
	}
	
	var mainScroll = $.mainScroll;
	
	for(var i = 0; i < productos.length; i++){
		
		for(var j = 0; j < productos[i]['producto_precios'].length; j++){
			
			var Main = Ti.UI.createView({
				width:"100%",
				layout:'horizontal',
				height:"232px",
				id: productos[i]['producto_precios'][j]['id']
			});
			
			var Margen = Ti.UI.createView({
				width:"100%",
				height:"2px",
				backgroundColor:"#e8e8e8"
			});
			
			var ImageViewProducto = Ti.UI.createImageView({
				backgroundImage : productos[i]['prod_pic'],
				width:"25%",
				height:"100%"
			});
			
			var LabelGroup = Ti.UI.createView({
				width:"68%",
				height:"100%",
				layout:"vertical",
				top:"0%"
			});
			
			var LabelNombre = Ti.UI.createLabel({
				color:"#cc5122",
				width:"100%",
				height:"20%",
				top:"20%",
				left:"8%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text : productos[i]['brand']
			});
			
			var LabelDescripcion = Ti.UI.createLabel({
				color:"gray",
				width:"100%",
				height:"20%",
				top:"0%",
				left:"8%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text : productos[i]['prod_name']
			});
			
			var LabelPrecio = Ti.UI.createLabel({
				width:"100%",
				height:"20%",
				color:"#5c5c5b",
				top:"0%",
				left:"8%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text : productos[i]['producto_precios'][j]['sku_description']+
					" x $"+productos[i]['producto_precios'][j]['sku_price']
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
				if(marca == productos[i]['marca_id']){	
					mainScroll.add(Main);
					mainScroll.add(Margen);	
				}	
			}
			else if((categoria != "TODAS") && (marca == "TODAS")){
				if(categoria == productos[i]['tipo']){
					mainScroll.add(Main);	
					mainScroll.add(Margen);	
				}
			}
			else if((categoria != "TODAS") && (marca != "TODAS")){
				if((categoria == productos[i]['tipo']) && (marca == productos[i]['marca_id'])){
					mainScroll.add(Main);	
					mainScroll.add(Margen);	
				}	
			}
			
		}
	}
}

function productosPerroGato(){
	var vista = Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3],marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	var vista = Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[1],marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	var vista = Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[2],marca: "TODAS"}).getView();
	vista.open();
}

function productosMarca(marca){
	if(marca == Ti.App.marca_actual){
		var vista = Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: "TODAS",marca: "TODAS"}).getView();
		vista.open();	
	}
	else{
		var vista = Alloy.createController('productos',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: "TODAS",marca: marca}).getView();
		vista.open();	
	}
}

function productosView(producto){
	var mainScroll = $.mainScroll;
	//mainScroll.removeAllChildren();
	marcasScroll = null;
	mainScroll = null;
	
	var vista = Alloy.createController('productoView',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,producto: producto}).getView();
	vista.open();
}