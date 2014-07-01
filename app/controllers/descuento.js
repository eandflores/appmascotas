var args = arguments[0] || {};

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

iniciarComponentes();
iniciarMenu();
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

var descuentoTitulo = Ti.UI.createImageView({
	width: "72%",
	height:"85%",
	backgroundImage:"/img/cuponDescuento.jpg"
});

marcasView.add(flecha);
marcasView.add(descuentoTitulo);

var margen = Ti.UI.createView({
	width:"100%",
	height:"3.1%",
	backgroundImage:"/img/Margen.jpg"
});

var mainView = Ti.UI.createView({
	width:"100%",
	height:"69.8%",
	layout:'vertical'
});

var viewDescuento = Ti.UI.createView({
	width:"100%",
	height:"7%",
	backgroundImage:"/img/labelDescuento.jpg"
});

var inputDescuento = Ti.UI.createTextField({
	minimumFontSize: 8,
	left:"30%",
	width:"60%",
	height:"80%",
	color:"#888888",
	font:{
		fontFamily:"Noto Sans",
		fontWeight:"bold",
		fontSize:12
	},
	backgroundColor:"#d8d8d8"
});

viewDescuento.add(inputDescuento);
mainView.add(viewDescuento);

var footer = Ti.UI.createButton({
	backgroundColor:"#cc5122",
	color:"white",
	width:"100%",
	height:"7.6%",
	font: {
		fontWeight:"bold"
   },
   title:"GUARDAR"
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

footer.addEventListener("click",function(){
	guardar();
});

function busquedaProducto(){
	buscarProducto();
	lupa.addEventListener("click",function(){
		productosNombre(buscar.value);
	});
}

main.add(wrapper);
main.add(marcasView);
main.add(margen);
main.add(mainView);
main.add(footer);

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: $.descuento
});

//inputDescuento.value = usuario['cust_email'];
inputDescuento.value = 'b8c7tetxs';

function productosNombre(nombre){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: "TODAS", marca: "TODAS",nombre: nombre,pagina: 1}).getView().open();
}

function productosPerroGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[3], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosPerro(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[1], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function productosGato(){
	
	Alloy.createController('productos',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion,categoria: categorias[2], marca: "TODAS",nombre: "TODOS",pagina: 1}).getView().open();
}

function guardar(){
	/*
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			try{
				var response = JSON.parse(this.responseText);
			
				usuario['cust_email'] = inputEmail.value;
				Alloy.createController('realizarPedido',{token : token,carro: carro,marcas: marcas,productos: productos,medios: medios,direcciones: direcciones,usuario: usuario,medio: medio, direccion: direccion}).getView().open();	
			}
			catch(e){
				alert("Error de conexión con el servidor.");
			}
		},
		onerror: function(e){
			alert("Error de conexión con el servidor.");
		}
	});
	
	xhr.open('POST','http://tiendapet.cl/api/usuario/?user_token='+token);
	xhr.send({'email' : inputEmail.value}); 
	*/
}

function atras(){
	$.descuento.close();
}