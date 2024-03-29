var win =  $.medioPago;

var args = arguments[0] || {};

var categorias = [];

// Los productos deben estar encasillados entre una de estas 2 categorias
categorias[1] = "Perro";
categorias[2] = "Gato";

//Categoria usada cuando se desea buscar productos de todas las categorias
categorias[3] = "TODAS";

var args = arguments[0] || {};

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

iniciarComponentes();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,'medioPago',null);
cargarLoading();

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

var mediosView = Ti.UI.createImageView({
	width: "72%",
	height:"85%",
	backgroundImage:"/img/medioPago.jpg"
});

marcasView.add(flecha);
marcasView.add(mediosView);

var margen = Ti.UI.createView({
	width:"100%",
	height:"3.1%",
	backgroundImage:"/img/Margen.jpg"
});

var mainScroll = Ti.UI.createScrollView({
	width:"100%",
	height:"77.4%",
	contentHeight: Ti.UI.SIZE,
	layout:'vertical',
	scrollType: 'vertical',
	showVerticalScrollIndicator:"true",
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

main.add(wrapper);
main.add(marcasView);
main.add(margen);
main.add(mainScroll);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.medioPago
});

for(i=0;i<medios.length;i++){
	
	var MedioPago = Ti.UI.createView({
		backgroundImage:"/img/flechaPagos.jpg",
		width:"100%",
		id: medios[i],
		height:"45dp"
	});
	
	MedioPago.addEventListener("click",function(){
		selectMedio(this['id']);
	});
	
	var Margen = Ti.UI.createView({
		width:"100%",
		height:"2px",
		backgroundColor:"#e8e8e8"
	});
	
	var Label = Ti.UI.createLabel({
		left:"7%",
		width:"86%",
		height:"100%",
		color:"#5c5c5b",
		font:{
			fontFamily:"Noto Sans",
			fontWeight:"bold"
		},
		text: medios[i]['paym_name']
	});
	
	MedioPago.add(Label);
	mainScroll.add(MedioPago);
	mainScroll.add(Margen);
}

function productosPerroGato(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosNombre(nombre){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function selectMedio(medio_selected){	
	Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio_selected, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
}

function atras(){
	$.medioPago.close();
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