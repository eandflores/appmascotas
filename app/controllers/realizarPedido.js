var win =  $.realizarPedido;

var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

carro = args['carro'];
token = args['token'];

marcas = args['marcas'];
productos = args['productos'];
medios = args['medios'];
direcciones = args['direcciones'];

medio = args['medio'];
direccion = args['direccion'];
correo = args['correo'];
telefono = args['telefono'];

var mainScroll = $.mainScroll;
mainScroll.removeAllChildren();

for(var i = 0; i < productos.length; i++){
	
	for(var j = 0; j < productos[i]['producto_precios'].length; j++){
		
		for(var k = 0; k < carro.length; k++){
			
			if(carro[k]['id'] ==  productos[i]['producto_precios'][j]['id']){
				
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
				
				var ViewLabels = Ti.UI.createView({
					width:"75%",
					height:"100%",
					layout:"vertical",
					top:"0%"
				});
				
				var LabelGroup = Ti.UI.createView({
					width:"75%",
					height:"60%",
					layout:"vertical",
					top:"0%"
				});
				
				var LabelNombre = Ti.UI.createLabel({
					color:"#cc5122",
					width:"100%",
					height:"40%",
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
					height:"40%",
					top:"0%",
					left:"8%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['prod_name']
				});
				
				var LabelGroup2 = Ti.UI.createView({
					width:"75%",
					height:"40%",
					layout:"horizontal",
					top:"0%"
				});
				
				var LabelDetalle = Ti.UI.createLabel({
					width:"60%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : productos[i]['producto_precios'][j]['sku_description']+
							" x "+carro[k]['qty']
				});
								
				var LabelPrecio = Ti.UI.createLabel({
					width:"40%",
					height:"50%",
					color:"#5c5c5b",
					top:"25%",
					font:{
						fontFamily:"Noto Sans",
						fontWeight:"bold"
					},
					text : "$"+(carro[k]['qty'] * productos[i]['producto_precios'][j]['sku_price'])
				});
				
				LabelGroup.add(LabelNombre);
				LabelGroup.add(LabelDescripcion);
				
				LabelGroup2.add(LabelDetalle);
				LabelGroup2.add(LabelPrecio);
				
				ViewLabels.add(LabelGroup);
				ViewLabels.add(LabelGroup2);
				
				Main.add(ImageViewProducto);
				Main.add(ViewLabels);
				
				mainScroll.add(Main);	
				mainScroll.add(Margen);
			}
		}
	}
}

if(medio != null){
	for(i = 0; i< medios.length;i++){
		if(medios[i]['id'] == medio){
			$.pago.text = medios[i]['paym_name'];
		}
	}
}

function productosPerroGato(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[3], marca: "TODAS"}).getView();
	vista.open();
}

function productosPerro(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[1], marca: "TODAS"}).getView();
	vista.open();
}

function productosGato(){
	
	var vista = Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono,categoria: categorias[2], marca: "TODAS"}).getView();
	vista.open();
}

function setDireccion(){
	var vista = Alloy.createController('direccion',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono}).getView();
	vista.open();
}

function setCorreo(){
	
}

function setMedioPago(){
	var vista = Alloy.createController('medioPago',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono}).getView();
	vista.open();
}

function setTelefono(){
	var vista = Alloy.createController('telefono',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: medio, direccion: direccion,correo: correo,telefono: telefono}).getView();
	vista.open();
}

function setCupon(){
	
}

function gracias(){
	var vista = Alloy.createController('gracias',{token: token,carro: [],marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,medio: null, direccion: null,correo: null,telefono: null}).getView();
	vista.open();
}

function atras(){
	win.close();
}
