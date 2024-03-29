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

iniciarComponentes();
cargarLoading();
//iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,padre,producto);
iniciarMenu(token,carro,marcas,productos,medios,direcciones,usuario,medio,direccion,descuento,pedidos,notificaciones,'gracias',null);

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
	id:"marcas",
	backgroundImage:"/img/fondoMarcas.jpg",
	width:"100%",
	height:"10%",
	layout:"horizontal"
});

var flechaIzq = Ti.UI.createImageView({
	width:"14%",
	height:"80%",
	backgroundImage:"/img/FlechaIzq.jpg"
});

var flechaDer = Ti.UI.createImageView({
	width:"14%",
	height:"80%",
	backgroundImage:"/img/FlechaDer.jpg"
});

var marcasScroll = Ti.UI.createScrollView({
	id:"marcasScroll",
	width: "72%",
	contentWidth: Ti.UI.SIZE,
	scrollType: 'horizontal',
	layout: 'horizontal',
	height:"85%",
	horizontalWrap: "false", //Propiedad se de debe sacar para que funcione scroll vertical
	showHorizontalScrollIndicator:"true",
});

var posX = 0;
 
marcasScroll.addEventListener('scroll',function(e){
    posX = Math.round(e.x);
});

flechaIzq.addEventListener("click",function(){
	if(posX < 250){
		marcasScroll.scrollTo(0,0);
	}
	else{
		marcasScroll.scrollTo(posX-250,0);
	}
});

flechaDer.addEventListener("click",function(){
	marcasScroll.scrollTo(posX+250,0);
});

marcasView.add(flechaIzq);
marcasView.add(marcasScroll);
marcasView.add(flechaDer);

for(var i = 0; i < marcas.length; i++){
	var ImageViewMarca = Ti.UI.createImageView({
		image : marcas[i]['brand_logo'],
		defaultImage: "/img/Doguitos.jpg",
		width:"125dp",
		id: marcas[i]['id'],
		height:"100%"
	});
	
	ImageViewMarca.addEventListener("click",function(){
		productosMarca(this['id']);
	});
	
	marcasScroll.add(ImageViewMarca);
}

var mainView = Ti.UI.createView({
	width:"100%",
	height:"80.5%",
	layout:"vertical"
});

var imagenGracias = Ti.UI.createImageView({
	width:"100%",
	height:"43.2%",
	image:"/img/gracias.jpg"
});

var labels = Ti.UI.createView({
	width:"100%",
	height:"47.8%",
	layout:"vertical"
});

var tituloGracias1 = Ti.UI.createImageView({
	height:"11.3%",
	width:"100%",
	backgroundImage:"/img/tituloGracias.jpg"
});

var gracias = Ti.UI.createLabel({
	left:"14%",
	height:"8%",
	color:"#585858",
	font: {
        fontSize: '10sp'
   },
   text:"Revisa tu correo para seguir con la operación"
});

var tituloGracias2 = Ti.UI.createImageView({
	height:"11.3%",
	width:"100%",
	backgroundImage:"/img/tituloMedio.jpg"
});

var pago = Ti.UI.createLabel({
	left:"14%",
	height:"8%",
	color:"#585858",
	font: {
        fontSize: '10sp'
    }
});

labels.add(tituloGracias1);
labels.add(gracias);
labels.add(tituloGracias2);
labels.add(pago);

var footer = Ti.UI.createButton({
	backgroundColor:"#cc5122",
	color:"white",
	width:"100%",
	height:"9%",
	title:"ACEPTAR",
	font: {
		fontWeight:"bold",
        fontSize: '12sp'
    }
});

footer.addEventListener("click",function(){
	finalizar();
});

mainView.add(imagenGracias);
mainView.add(labels);
mainView.add(footer);

main.add(wrapper);
main.add(marcasView);
main.add(mainView);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.gracias
});

for(i = 0; i< medios.length;i++){
	if(medios[i]['id'] == medio['id']){
		pago.text = medios[i]['paym_name'];
	}
}

function productosNombre(nombre){
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function productosPerroGato(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio,direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[1],marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosMarca(marca){	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones,categoria: categorias[3], marca: marca,nombre: "TODOS",pagina: 1}).getView().open();
}

function finalizar(){	
	Alloy.createController('fin',{token: token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,descuento: descuento, pedidos: pedidos,notificaciones: notificaciones}).getView().open();
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