var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var carro = args['carro'];
var token = args['token'];

var marcas = args['marcas'];
var productos = args['productos'];
var medios = args['medios'];
var direcciones = args['direcciones'];

var usuario = args['usuario'];
var medio = args['medio'];
var direccion = args['direccion'];
var descuento = args['descuento'];

var pedidos = args['pedidos'];
var notificaciones = args['notificaciones'];

var padre = args['padre'];
var producto = args['producto'];

Ti.API.info(pedidos);
/*
var pedidos = [
	{id: 1, fecha: '2014-05-10', programado: true,carro: [
		{'id' : 1, 'qty' : 2}
	]},
	{id: 2, fecha: '2014-04-15', programado: false,carro: [
		{'id' : 10, 'qty' : 1},
		{'id' : 32, 'qty' : 3}
	]},
	{id: 3, fecha: '2014-02-01', programado: true,carro: [
		{'id' : 47, 'qty' : 1}
	]},
	{id: 4, fecha: '2014-01-30', programado: false,carro: [
		{'id' : 68, 'qty' : 1},
		{'id' : 77, 'qty' : 4},
		{'id' : 85, 'qty' : 1}
	]}
];
*/
iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,padre,producto);

var mainScroll = Ti.UI.createScrollView({
	width:"100%",
	height:"80.4%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical',
	scrollType: 'vertical',
	showVerticalScrollIndicator:"true"
});

menuImg.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
});

perrogato.addEventListener("click",function(){
	productosPerroGato();
});

perro.addEventListener("click",function(){
	productosPerro();
});

gato.addEventListener("click",function(){
	productosGato();
});

lupaImg.addEventListener("click",function(){
	busquedaProducto();
});

var marcasView = Ti.UI.createView({
	backgroundImage:"/img/fondoMarcas.jpg",
	width:"100%",
	height:"10%",
	layout:"horizontal"
});

var flecha = Ti.UI.createImageView({
	width:"14%",
	height:"85%",
	backgroundImage:"/img/FlechaIzq.jpg"
});

flecha.addEventListener('click',function(e){
	atras();
});

var pedidoTitulo = Ti.UI.createView({
	width: "86%",
	height:"85%",
	layout: 'horizontal',
	backgroundImage: '/img/misPedidos.png'
});

marcasView.add(flecha);
marcasView.add(pedidoTitulo);

main.add(wrapper);
main.add(marcasView);
main.add(mainScroll);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.pedidos
});

for(var n = 0; n < pedidos.length; n++){
	
	if(pedidos[n]['orden'].length > 0){
	
		var total_val = 0;
		
		for(var k = 0; k < pedidos[n]['orden'].length; k++){
				
			total_val = total_val + (pedidos[n]['orden'][k]['qty'] * pedidos[n]['orden'][k]['sku_price']);
			
			var Main = Ti.UI.createView({
				width:"100%",
				layout:'horizontal',
				height:"242px",
				id: pedidos[n]['orden'][k]['sku_id']
			});
			
			var Margen = Ti.UI.createView({
				width:"100%",
				height:"2px",
				backgroundColor:"#e8e8e8"
			});
			
			var ImageViewProducto = Ti.UI.createView({
				width:"25%",
				height:"100%",
				backgroundColor:"white"
			});
			
			var ImageViewProducto_int = Ti.UI.createImageView({
				image : pedidos[n]['orden'][k]['prod_pic'],
				defaultImage: "/img/Perro1.jpg",
				width:"auto",
				height:"100%"
			});
			
			ImageViewProducto.add(ImageViewProducto_int);
			
			var ViewLabels = Ti.UI.createView({
				width:"75%",
				height:"100%",
				layout:"vertical",
				top:"0%"
			});
			
			var LabelGroup = Ti.UI.createView({
				width:"85%",
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
				text : pedidos[n]['orden'][k]['name']
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
				text : pedidos[n]['orden'][k]['prod_name']
			});
			
			var LabelGroup2 = Ti.UI.createView({
				width:"85%",
				height:"40%",
				layout:"horizontal",
				top:"0%"
			});
			
			var LabelPeso = Ti.UI.createLabel({
				width:"33%",
				height:"60%",
				color:"#5c5c5b",
				top:"20%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text : pedidos[n]['orden'][k]['sku_description']
			});
			
			var LabelCantidad = Ti.UI.createLabel({
				width:"33%",
				height:"60%",
				color:"#5c5c5b",
				top:"20%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text :"Cant "+pedidos[n]['orden'][k]['qty']
			});
			
			var LabelPrecio = Ti.UI.createLabel({
				width:"33%",
				height:"60%",
				color:"#5c5c5b",
				top:"20%",
				font:{
					fontFamily:"Noto Sans",
					fontWeight:"bold"
				},
				text : "$"+formatCurrency(pedidos[n]['orden'][k]['qty'] * pedidos[n]['orden'][k]['sku_price'])
			});
			
			LabelGroup.add(LabelNombre);
			LabelGroup.add(LabelDescripcion);
			
			LabelGroup2.add(LabelPeso);
			LabelGroup2.add(LabelCantidad);
			LabelGroup2.add(LabelPrecio);
			
			ViewLabels.add(LabelGroup);
			ViewLabels.add(LabelGroup2);
			
			Main.add(ImageViewProducto);
			Main.add(ViewLabels);
			
			mainScroll.add(Main);	
			mainScroll.add(Margen);
					
		}
		
		var BotonPedido = Ti.UI.createView({
			id: pedidos[n]['resumen']['id'],
			width:"100%",
			height:"200px"
		});
		
		var BotonPedidoInt = Ti.UI.createImageView({
			width:"auto",
			height:"100%",
			image:"/img/botonPedido.png"
		});
		
		BotonPedido.add(BotonPedidoInt);
		BotonPedido.addEventListener('click',function(e){
			repetirPedido(this['id']);
		});
	
		var Margen2 = Ti.UI.createView({
			width:"100%",
			height:"2px",
			backgroundColor:"#e8e8e8"
		});
		
		mainScroll.add(BotonPedido);
		mainScroll.add(Margen2);
	}
}

function productosPerroGato(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio,direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosMarca(marca){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: marca,nombre: "TODOS",pagina: 1}).getView().open();
}


function productosNombre(nombre){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function repetirPedido(id){
	
	var carro_actual = [];
	
	for(var i = 0; i < pedidos.length; i++){
		
		if(pedidos[i]['resumen']['id'] == id){
			
			for(var j = 0;j < pedidos[i]['orden'].length; j++){
				carro_actual.push({'id' : pedidos[i]['orden'][j]['sku_id'], 'qty' : pedidos[i]['orden'][j]['qty']});
			}	
		}
		
		Alloy.createController('carroCompra',{token : token,carro: carro_actual,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
		
	}
		
}

function atras(){
	$.pedidos.close();	
}

function busquedaProducto(){
	buscarProducto();
	
	
	buscar.addEventListener("click",function(){
		if(buscar.value == "¿Que es lo que buscas?")
			buscar.value = "";
	});
	
	lupa.addEventListener("click",function(){
		if(buscar.value != "¿Que es lo que buscas?" && buscar.value != "")
			productosNombre(buscar.value);
		else if(buscar.value == "")
			buscar.value = "¿Que es lo que buscas?";
	});
}